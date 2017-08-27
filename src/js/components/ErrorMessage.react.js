import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

let ErrorMessage = (props) => {
	return (
		props.errorMessage ?
			<div className="error-wrapper">
				{props.errorMessage}
			</div>
			:<div></div>
	);
};

ErrorMessage.propTypes = {
	errorMessage: PropTypes.string
};

const mapStateToProps = (state) => ({
	errorMessage: state.errorMessage
});

ErrorMessage = connect(mapStateToProps)(ErrorMessage);

export default ErrorMessage;