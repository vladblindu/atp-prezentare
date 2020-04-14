#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const FtpClient = require('ftp')
const glob = require('glob')
require('dotenv').config()

if(!process.env.FTP_HOST || !process.env.FTP_PASSWORD || !process.env.FTP_USER){
  console.error('FATAL ERROR: No valid credentials found in environment.')
  process.exit(403)
}


const root = path.resolve(path.join(__dirname, '../'))
const basePath = path.join(root, './public')
const destinationPath = ''
const config = {
  // We store the credentials for
  // our FTP server as environment
  // variables for security reasons.
  host: process.env.FTP_HOST,
  password: process.env.FTP_PASSWORD,
  user: process.env.FTP_USER,
  port: 21
}

const ftpClient = new FtpClient()

function createDirectory(destination) {
  return ftpClient.mkdir(destination, true, (error) => {
    if (error) throw error

    ftpClient.end()
  })
}

function uploadFile(file, destination) {
  ftpClient.put(file, destination, (error) => {
    if (error) throw error
    console.log(`${file} => ${destination}`)
    ftpClient.end()
  })
}

// Check if the path is a directory and
// either create the directory on the server
// if it is a directory, or upload the file
// if it is a file.
function handlePath(pth) {
  const relativeFile = pth.replace(`${basePath}/`, '')
  const destination = `${destinationPath}/${relativeFile}`

  if (fs.lstatSync(pth).isDirectory()) {
    return createDirectory(destination)
  }

  return uploadFile(pth, destination)
}

ftpClient.on('ready', () => {
  // Get an array of all files and directories
  // in the given base path and send them to the
  // `handlePath()` function to decide if a
  // directory is created on the server or the
  // file is uploaded.
  const files = glob.sync(`${basePath}/**/*`)
  files.forEach(handlePath)
})

ftpClient.connect(config)