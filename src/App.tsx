import AnimatedRoutes from 'components/AnimatedRoutes'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

export default function App(): ReactElement {
	return (
		<Router>
			<Suspense fallback={<LoadingOrError />}>
				<AnimatedRoutes />
			</Suspense>
		</Router>
	)
}
