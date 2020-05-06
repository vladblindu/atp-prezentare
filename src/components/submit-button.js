import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const SubmitButton = ({disabled}) =>
    <button
        type="submit"
        disabled={disabled}
        className={cx(
            "px-6 my-2 md:px-10 md:my-0 text-white rounded bg-secondary hover:bg-secondary-light ", {
                "opacity-50 cursor-not-allowed": disabled
            })
        }
    >
        Submit
    </button>

SubmitButton.propTypes = {
    disabled: PropTypes.bool
}

export default SubmitButton