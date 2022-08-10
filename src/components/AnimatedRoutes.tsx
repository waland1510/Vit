import { AnimatePresence } from 'framer-motion'
import type { ReactElement } from 'react'
import { lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

const Gallery = lazy(async () => import('pages/Gallery'))
const Details = lazy(async () => import('pages/Details'))

export default function AnimatedRoutes(): ReactElement {
	const location = useLocation()

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Gallery />} />
				<Route path=':fruitName' element={<Details />} />
			</Routes>
		</AnimatePresence>
	)
}
