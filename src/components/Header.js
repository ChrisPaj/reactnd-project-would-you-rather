import React, { Fragment}  from 'react'
import Nav from './Nav'

export default function Header () {
  return (
	  <Fragment>
    <div>
		<Nav />
	</div>
	<div>
		<span>User</span>
		<span>Login</span>
	</div>
	</Fragment>
  )
}