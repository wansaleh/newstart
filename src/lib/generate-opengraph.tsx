/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
import { ImageResponseOptions } from 'next/server';

import { baseUrl } from './config';

const loadFont = async (url: URL) =>
	fetch(new URL(url, import.meta.url)).then((res) => res.arrayBuffer());

export default async function generateOpenGraph({
	title,
	nameArabic,
	imageUrl = `${baseUrl}/images/quran.jpg`,
	snippet,
	width = 1200,
	height = 675,
}: {
	title: string;
	nameArabic?: string;
	imageUrl?: string | null;
	snippet?: string;
	width?: number;
	height?: number;
}) {
	try {
		const options = {
			width,
			height,
			fonts: [
				{
					name: 'Sans',
					data: await loadFont(
						new URL('@/assets/fonts/InterTight-Medium.ttf', import.meta.url)
					),
					style: 'normal',
					weight: 400,
				},
				// {
				// 	name: 'Quran',
				// 	data: await loadFont(
				// 		new URL('@/assets/fonts/Lemonada-Regular.ttf', import.meta.url)
				// 	),
				// 	style: 'normal',
				// 	weight: 500,
				// },
			],
			headers: {
				'Content-Type': 'image/png',
				'Cache-Control': 'public s-max-age=1, stale-while-revalidate=600',
			},
		} as ImageResponseOptions;

		const output = (
			<div
				style={{
					position: 'relative',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
					fontSize: '3rem',
					fontFamily: 'Sans',
					color: '#000',
					background: '#fff',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						flex: 1,
						// width: width / 2,
						height,
						padding: '3rem',
					}}
				>
					<div
						style={{
							display: 'flex',
							marginBottom: 'auto',
							fontSize: '0.5em',
							fontWeight: 800,
							lineHeight: 1,
							whiteSpace: 'pre-wrap',
							letterSpacing: '-0.025em',
							// opacity: 0.6,
							fontFamily: 'Sans',
							width: '100%',
						}}
					>
						<span
							style={{
								padding: '0.3em 0.6em 0.25em',
								borderRadius: 8,
								background: '#000',
								color: '#fff',
							}}
						>
							QuranSaya
						</span>
					</div>

					{nameArabic && (
						<div
							style={{
								// position: 'relative',
								// zIndex: '10',
								fontSize: '1.5em',
								fontWeight: 800,
								lineHeight: 1,
								whiteSpace: 'pre-wrap',
								fontFamily: 'Quran',
								marginBottom: '0.1em',
								width: '100%',
								// opacity: 0.9,
							}}
						>
							{nameArabic}
						</div>
					)}

					<div
						style={{
							// fontFamily: 'Serif',
							fontWeight: 800,
							lineHeight: 0.9,
							whiteSpace: 'pre-wrap',
							letterSpacing: '-0.025em',
							marginBottom: 4,
							width: '100%',
						}}
					>
						{title}
					</div>
				</div>

				{snippet && !imageUrl && (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							flex: 1,
							// width: width / 2,
							height,
							padding: '3rem',
							fontFamily: 'Sans',
							fontSize: '2rem',
							fontWeight: 400,
							letterSpacing: '-0.025em',
							lineHeight: 1,
							// textAlign: 'justify',
							color: '#fff',
							background: '#000',
						}}
					>
						<div
							style={{
								fontSize: '70rem',
								position: 'absolute',
								top: '-16rem',
								right: '-7rem',
								opacity: 0.2,
							}}
						>
							“
						</div>

						{snippet}
					</div>
				)}

				{imageUrl && (
					<img
						alt=""
						src={imageUrl}
						style={{
							// position: 'absolute',
							// inset: 0,
							// right: 0,
							width: width / 2,
							height: height,
							objectFit: 'cover',
							objectPosition: 'center',
						}}
					/>
				)}
			</div>
		);

		return new ImageResponse(output, options);
	} catch (e: any) {
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
