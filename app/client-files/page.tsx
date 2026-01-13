import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from "next"
import { Download, FileImage, Folder } from "lucide-react"

export const metadata: Metadata = {
    title: "Client Files - Tasknify",
    description: "Access your project files, assets, and deliverables. Secure client portal for Tasknify projects.",
}

// This would typically come from a database or API
const clientFiles = {
    biofarms: {
        name: "BioFarms",
        description: "Agricultural technology platform",
        folders: [
            {
                name: "January Newsletter - Imagery",
                path: "/biofarms/January Newsletter - Imagery",
                files: [
                    { name: "AvonBankMeadowWR102JF001.gif", type: "image", size: "2.1 MB" },
                    { name: "AvonbankMeadowWR102JF001.jpg", type: "image", size: "1.8 MB" },
                    { name: "Avon_Meadows_photo.jpg", type: "image", size: "1.7 MB" },
                    { name: "biofarm_video_frame.jpg", type: "image", size: "91 KB" },
                    { name: "Future Homes Hub.jpeg", type: "image", size: "945 KB" },
                    { name: "footer_logo.png", type: "image", size: "3.3 KB" },
                    { name: "Lesnewth.jpeg", type: "image", size: "1.2 MB" },
                    { name: "Lesnewth_photo.jpg", type: "image", size: "1.4 MB" },
                    { name: "logo.png", type: "image", size: "7.8 KB" },
                    { name: "nLighten.jpeg", type: "image", size: "876 KB" },
                    { name: "Phil+Biofarm+headshot.webp", type: "image", size: "234 KB" },
                    { name: "Swifts.jpeg", type: "image", size: "1.5 MB" },
                ]
            }
        ]
    }
}

export default function ClientFilesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main className="pt-24 pb-16">
                {/* Hero Section */}
                <section className="px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
                                Client Files
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Access your project files, assets, and deliverables. All your Tasknify project resources in one secure location.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Client Files Grid */}
                <section className="px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid gap-8">
                            {Object.entries(clientFiles).map(([clientKey, client]) => (
                                <Card key={clientKey} className="p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                            <Folder className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-[#0F172A]">{client.name}</h2>
                                            <p className="text-gray-600">{client.description}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {client.folders.map((folder, folderIndex) => (
                                            <div key={folderIndex} className="border border-gray-200 rounded-lg p-6">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <Folder className="w-5 h-5 text-gray-500" />
                                                    <h3 className="text-lg font-semibold text-[#0F172A]">{folder.name}</h3>
                                                    <span className="text-sm text-gray-500">({folder.files.length} files)</span>
                                                </div>

                                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {folder.files.map((file, fileIndex) => (
                                                        <div key={fileIndex} className="bg-white border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-shadow">
                                                            <div className="flex items-start gap-3">
                                                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                    <FileImage className="w-5 h-5 text-gray-500" />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="text-sm font-medium text-[#0F172A] truncate" title={file.name}>
                                                                        {file.name}
                                                                    </p>
                                                                    <p className="text-xs text-gray-500 mt-1">{file.size}</p>
                                                                </div>
                                                            </div>
                                                            <div className="mt-3 flex gap-2">
                                                                <Link
                                                                    href={`${folder.path}/${encodeURIComponent(file.name)}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="flex-1"
                                                                >
                                                                    <Button
                                                                        size="sm"
                                                                        variant="outline"
                                                                        className="w-full text-xs"
                                                                    >
                                                                        <Download className="w-3 h-3 mr-1" />
                                                                        Download
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Access Notice */}
                <section className="px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-6 bg-blue-50 border-blue-200">
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                                    Need Access to Your Files?
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    If you're a client and don't see your project files here, or need access to additional resources, please contact us.
                                </p>
                                <Link href="/contact">
                                    <Button className="bg-[#0F172A] hover:bg-gray-800 text-white">
                                        Contact Support
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
