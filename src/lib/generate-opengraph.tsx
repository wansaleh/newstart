import type { ImageResponseOptions } from 'next/server'
import { ImageResponse } from 'next/og'

import { siteTitle } from '@/app/metadata'

async function loadFont(url: URL) {
  return fetch(new URL(url, import.meta.url)).then(res => res.arrayBuffer())
}

export default async function generateOpenGraph({
  title,
  description,
  width = 1200,
  height = 675,
}: {
  title: string
  description?: string
  width?: number
  height?: number
}) {
  try {
    const options = {
      width,
      height,
      fonts: [
        {
          name: 'Sans',
          data: await loadFont(
            new URL('@/assets/fonts/Geist-Medium.otf', import.meta.url),
          ),
          style: 'normal',
          weight: 400,
        },
      ],
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public s-max-age=1, stale-while-revalidate=600',
      },
    } as ImageResponseOptions

    const output = (
      <div tw="relative w-full h-full flex items-start p-10 justify-end text-6xl font-sans text-black bg-white tracking-tight flex-col">
        <div tw="flex mb-auto text-3xl font-bold leading-none tracking-tight">
          <span tw="px-3 py-2 rounded-xl bg-black text-white">{siteTitle}</span>
        </div>

        <div tw="text-7xl font-serif leading-none tracking-tighter">
          {title}
        </div>

        <div tw="h-1 w-12 bg-black rounded-full mt-10 ml-0.5" />

        {description && (
          <div tw="text-4xl font-normal max-w-screen-md leading-none tracking-tighter mt-2">
            {description}
          </div>
        )}
      </div>
    )

    return new ImageResponse(output, options)
  }
  catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
