"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const clientFiles = {
    biofarms: {
        name: "BioFarms",
        description: "Agricultural technology platform",
        folders: [
            {
                name: "January Newsletter - Imagery",
                path: "/biofarms/January Newsletter - Imagery",
                files: [
                    { name: "AvonBankMeadowWR102JF001.gif", size: "2.1 MB" },
                    { name: "AvonbankMeadowWR102JF001.jpg", size: "1.8 MB" },
                    { name: "Avon_Meadows_photo.jpg", size: "1.7 MB" },
                    { name: "biofarm_video_frame.jpg", size: "91 KB" },
                    { name: "Future Homes Hub.jpeg", size: "945 KB" },
                    { name: "footer_logo.png", size: "3.3 KB" },
                    { name: "Lesnewth.jpeg", size: "1.2 MB" },
                    { name: "Lesnewth_photo.jpg", size: "1.4 MB" },
                    { name: "logo.png", size: "7.8 KB" },
                    { name: "nLighten.jpeg", size: "876 KB" },
                    { name: "Phil+Biofarm+headshot.webp", size: "234 KB" },
                    { name: "Phil.jpg", size: "52 KB" },
                    { name: "Swifts.jpeg", size: "1.5 MB" },
                    { name: "swift.jpg", size: "467 KB" },
                    { name: "video_thumbnail.jpg", size: "213 KB" },
                ]
            },
            {
                name: "February Newsletter - Imagery",
                path: "/biofarms/February Newsletter - Imagery",
                files: [
                    { name: "Beyond Availability.jpg", size: "80 KB" },
                    { name: "Beyond Availability1.jpg", size: "55 KB" },
                    { name: "Beyond Constraint.jpg", size: "25 KB" },
                    { name: "Beyond Constraint1.jpg", size: "45 KB" },
                    { name: "Beyond Policy.jpg", size: "19 KB" },
                    { name: "Beyond Policy1.jpg", size: "35 KB" },
                    { name: "Beyond Production.jpg", size: "31 KB" },
                    { name: "Beyond Production1.jpg", size: "29 KB" },
                    { name: "Beyond Today.jpg", size: "21 KB" },
                    { name: "Beyond Today1.jpg", size: "38 KB" },
                ]
            },
            {
                name: "March Newsletter - Imagery",
                path: "/biofarms/March Newsletter - Imagery",
                files: [
                    { name: "badger.jpeg", size: "132 KB" },
                    { name: "badger-2.jpg", size: "173 KB" },
                    { name: "badger-bank.png", size: "387 KB" },
                    { name: "spring-cleaning-at-sleight.JPG", size: "967 KB" },
                    { name: "WEMCA.jpeg", size: "679 KB" },
                    { name: "wrenbridge.jpg", size: "228 KB" },
                ]
            },
            {
                name: "Brand Assets",
                path: "/biofarms/Brand Assets",
                files: [
                    { name: "Bee_FINAL.png", size: "6.4 KB" },
                    { name: "Breeze_Block_FINAL.png", size: "3.6 KB" },
                    { name: "Crane_FINAL_Updated.png", size: "3.3 KB" },
                    { name: "Fern_FINAL 2.png", size: "7.5 KB" },
                    { name: "Lapwing_FINAL.png", size: "3.2 KB" },
                    { name: "Longhon_Cattle_FINAL.png", size: "9.3 KB" },
                    { name: "Wellington_FINAL.png", size: "2.7 KB" },
                ]
            }
        ]
    }
}

export default function ClientFilesPage() {
    const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({})

    function toggleFolder(key: string) {
        setOpenFolders(prev => ({ ...prev, [key]: !prev[key] }))
    }

    return (
        <div className="min-h-screen bg-[#050505]">
            <Header />

            <main>
                {/* Hero */}
                <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-[#00ff73] text-xs font-medium tracking-[0.2em] uppercase">
                            Client Portal
                        </span>
                        <h1 className="font-display text-4xl md:text-6xl text-white mt-4 mb-4">
                            Client Files
                        </h1>
                        <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
                            Access your project files, assets, and deliverables. All your
                            Tasknify project resources in one secure location.
                        </p>
                    </div>
                </section>

                {/* Client Files */}
                <section className="pb-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto space-y-10">
                        {Object.entries(clientFiles).map(([clientKey, client]) => (
                            <div key={clientKey} className="neon-card rounded-xl p-8 bg-[#0a0a0a]">
                                {/* Client header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-11 h-11 rounded-lg bg-[#00ffff]/10 flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-white">{client.name}</h2>
                                        <p className="text-sm text-white/30">{client.description}</p>
                                    </div>
                                </div>

                                {/* Folders as accordions */}
                                <div className="space-y-3">
                                    {client.folders.map((folder, fi) => {
                                        const key = `${clientKey}-${fi}`
                                        const isOpen = openFolders[key] ?? false

                                        return (
                                            <div key={fi} className="rounded-lg border border-white/5 bg-[#050505] overflow-hidden">
                                                {/* Folder header - clickable */}
                                                <button
                                                    onClick={() => toggleFolder(key)}
                                                    className="w-full flex items-center gap-3 p-5 hover:bg-white/[0.02] transition-colors"
                                                >
                                                    <svg
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="#00ffff"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="opacity-50 shrink-0"
                                                    >
                                                        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                                                    </svg>
                                                    <h3 className="text-base font-medium text-white text-left flex-1">{folder.name}</h3>
                                                    <span className="text-xs text-white/20 shrink-0">{folder.files.length} files</span>
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        className={`text-white/20 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                                    >
                                                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>

                                                {/* File grid - collapsible */}
                                                {isOpen && (
                                                    <div className="px-5 pb-5">
                                                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                                            {folder.files.map((file, fileIdx) => (
                                                                <Link
                                                                    key={fileIdx}
                                                                    href={`${folder.path}/${encodeURIComponent(file.name)}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="group flex items-center gap-3 rounded-lg border border-white/5 bg-[#0a0a0a] p-3.5 hover:border-[#00ffff]/20 transition-colors"
                                                                >
                                                                    <div className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#00ffff]/10 transition-colors">
                                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 group-hover:text-[#00ffff] transition-colors">
                                                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                                                            <polyline points="14 2 14 8 20 8" />
                                                                        </svg>
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <p className="text-sm text-white/60 truncate group-hover:text-white transition-colors" title={file.name}>
                                                                            {file.name}
                                                                        </p>
                                                                        <p className="text-[11px] text-white/20">{file.size}</p>
                                                                    </div>
                                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/10 group-hover:text-[#00ffff] transition-colors shrink-0">
                                                                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                                                    </svg>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}

                        {/* Access notice */}
                        <div className="rounded-xl border border-[#00ffff]/10 bg-[#0a0a0a] p-8 text-center">
                            <h3 className="text-lg font-semibold text-white mb-2">
                                Need Access to Your Files?
                            </h3>
                            <p className="text-sm text-white/40 mb-6 max-w-lg mx-auto">
                                If you&apos;re a client and don&apos;t see your project files here,
                                or need access to additional resources, please contact us.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-[#00ffff] hover:bg-[#00ffff]/80 text-[#050505] font-semibold rounded-lg px-8 py-3 text-sm transition-colors"
                            >
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
