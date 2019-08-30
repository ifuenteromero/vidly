import React, { Component } from 'react';

const Like = ({ liked, onLike }) => {
	let classes = 'fa-heart';
	liked ? (classes += ' fas') : (classes += ' far');
	return (
		<i onClick={onLike} style={{ cursor: 'pointer' }} className={classes}></i>
	);
};

export default Like;
