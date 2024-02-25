'use client';

import { domAnimation, LazyMotion } from 'framer-motion';
import { Provider } from 'react-wrap-balancer';

import { ThemeProvider } from '@/components/theme-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider>
			<LazyMotion features={domAnimation} strict>
				<ThemeProvider
					attribute="class"
					// defaultTheme="dark"
					enableSystem
				>
					{children}
				</ThemeProvider>
			</LazyMotion>
		</Provider>
	);
}
