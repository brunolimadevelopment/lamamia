/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Habilite caso utilize imagens externas
        domains: [
            "images.pexels.com"
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    
}

module.exports = nextConfig
