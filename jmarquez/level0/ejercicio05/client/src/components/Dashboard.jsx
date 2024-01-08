/* eslint-disable react/prop-types */
import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

const Dashboard = ({ data }) => {
	return (
		<div className='flex flex-col justify-center items-center bg-blue min-h-screen'>
			<h1 className='text-6xl mb-5'>{data.nam}</h1>
			<p className='text-3xl mb-4'>Balance: $USD {data.balance}</p>
			<ul className='flex justify-center mb-4'>
				<li>
					<NavLink to='deposit' >
						Deposit
					</NavLink>
				</li>
				<li className='px-8'>
					<NavLink to='transfer' >
						Transfer
					</NavLink>
				</li>
				<li>
					<NavLink to='withdraw' >
						Withdraw
					</NavLink>
				</li>
			</ul>
			<div>
				<Outlet />
			</div>
		</div>
	)
}

export default Dashboard
