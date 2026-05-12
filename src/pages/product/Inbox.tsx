import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
    Inbox as InboxIcon, ArrowRight, MessageSquare,
    Search, Filter, Pin, Users, Clock, WifiOff,
    CheckCircle, Crown, Tag, Paperclip,
    Keyboard, Timer, LayoutGrid, ArrowLeftRight, FileText,
    Sparkles, ChevronRight, Zap
} from "lucide-react"
import { Button } from "../../components/ui/Button"
import { usePageTitle } from "../../hooks/usePageTitle"
import { goToSignup } from "../../lib/constants"

const channels = [
    {
        name: "WhatsApp",
        color: "#25D366",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
    },
    {
        name: "Email",
        color: "#EA4335",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
    },
    {
        name: "Instagram",
        color: "#E4405F",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
    },
    {
        name: "Live Chat",
        color: "#FACC15",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FACC15"><path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8z" /><circle cx="8" cy="10" r="1.3" fill="#0F1216" /><circle cx="12" cy="10" r="1.3" fill="#0F1216" /><circle cx="16" cy="10" r="1.3" fill="#0F1216" /></svg>
    },
    {
        name: "SMS",
        color: "#4CAF50",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
    },
    {
        name: "Slack",
        color: "#4A154B",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4A154B"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" /></svg>
    },
    {
        name: "Telegram",
        color: "#0088CC",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0088CC"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
    },
    {
        name: "Messenger",
        color: "#0084FF",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0084FF"><path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.2l3.131 3.259L19.752 8.2l-6.561 6.763z" /></svg>
    },
    {
        name: "LinkedIn",
        color: "#0A66C2",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
    }
]

const features = [
    {
        category: "Smart Conversation List",
        items: [
            "Unread indicators with glow effect",
            "Relative timestamps (now, 2m, 5h, 3d)",
            "Color-coded health indicators",
            "VIP, returning, new customer badges",
            "Revenue attribution on cards",
            "Tag chips with overflow count"
        ]
    },
    {
        category: "Saved Views & Filters",
        items: [
            "Custom filter combinations",
            "Shareable team views",
            "Channel, status, priority filters",
            "Unread only toggle",
            "Date range filtering"
        ]
    },
    {
        category: "Productivity Features",
        items: [
            "Keyboard shortcuts (R, T, /, Esc)",
            "Bulk actions on selection",
            "Conversation pinning",
            "Smart search with highlighting",
            "Export to CSV/PDF"
        ]
    }
]

const workflowFeatures = [
    { icon: Clock, title: "Conversation Snooze", desc: "Preset options + custom scheduling with stuck detection warnings" },
    { icon: Users, title: "Collision Detection", desc: "Real-time presence tracking, viewer avatars, typing indicators" },
    { icon: ArrowLeftRight, title: "Seamless Transfer", desc: "Agent picker with transfer reason, full handoff history" },
    { icon: Timer, title: "SLA Countdown", desc: "Real-time timers, color-coded urgency, breach alerts" },
    { icon: WifiOff, title: "Offline Queue", desc: "Messages queued when offline, auto-sync on reconnect" },
    { icon: CheckCircle, title: "Resolution Workflow", desc: "Structured closure with reasons, notes, and metrics" }
]

export function Inbox() {
    usePageTitle({
        title: "Unified Inbox - All Channels in One Place",
        description: "Unified omnichannel inbox for modern support teams. Manage email, live chat, WhatsApp, Instagram, and more from one powerful, organized interface."
    })
    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.3),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <InboxIcon className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-400">Unified Inbox</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            Every channel.<br />
                            One powerful inbox.
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            WhatsApp, Email, Instagram, Live Chat, and more — all in a single pane of glass.
                            Smart signals, keyboard shortcuts, and AI-powered prioritization.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary" size="lg" onClick={goToSignup}>
                                    Start free trial
                                    <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Link to="/contact-sales">
                                <Button variant="secondary" size="lg">
                                    Talk to sales
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Interactive Inbox Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-blue-500/25 blur-[120px] -z-10" />

                            {/* Main Inbox UI */}
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_140px_rgba(0,0,0,0.85)] bg-[#0C0E12]">
                                <span className="absolute top-2 right-3 text-[9px] font-semibold uppercase tracking-wider text-white/20 bg-white/5 px-2 py-0.5 rounded-full z-10">Sample data — illustrative only</span>
                                {/* Header */}
                                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                                        </div>
                                        <span className="text-xs text-gray-400 ml-3">Inbox</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 text-gray-400">
                                            <Search className="w-3 h-3" />
                                            <span className="text-[10px]">Search...</span>
                                            <span className="text-[10px] px-1 rounded bg-white/10">/</span>
                                        </div>
                                        <Filter className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>

                                {/* Conversation List */}
                                <div className="divide-y divide-white/5">
                                    {/* Pinned Conversation */}
                                    <div className="p-4 bg-blue-500/5 border-l-2 border-blue-500">
                                        <div className="flex items-start gap-3">
                                            <div className="relative">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xs font-bold">PS</div>
                                                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center text-[8px]">💬</div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between mb-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-medium text-white">Priya Sharma</span>
                                                        <Crown className="w-3 h-3 text-amber-400" />
                                                        <Pin className="w-3 h-3 text-blue-400" />
                                                    </div>
                                                    <span className="text-[10px] text-gray-400">2m</span>
                                                </div>
                                                <p className="text-xs text-gray-400 truncate">That sounds good. Please confirm the delivery date.</p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">₹12,499</span>
                                                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400">delivery</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_6px_rgba(168,85,247,0.5)]" />
                                                <div className="flex -space-x-1">
                                                    <div className="w-4 h-4 rounded-full bg-violet-500 ring-2 ring-[#0C0E12] flex items-center justify-center text-[8px] text-white">J</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Regular Conversation - Critical */}
                                    <div className="p-4 hover:bg-white/[0.02] transition-colors cursor-pointer">
                                        <div className="flex items-start gap-3">
                                            <div className="relative">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white text-xs font-bold">RK</div>
                                                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#EA4335] flex items-center justify-center text-[8px]">✉️</div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-sm font-medium text-white">Rahul Khanna</span>
                                                    <span className="text-[10px] text-gray-400">18m</span>
                                                </div>
                                                <p className="text-xs text-gray-400 truncate">Payment failed but amount deducted. Need urgent help!</p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">urgent</span>
                                                    <Paperclip className="w-3 h-3 text-gray-400" />
                                                </div>
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                        </div>
                                    </div>

                                    {/* Regular Conversation - Snoozed */}
                                    <div className="p-4 hover:bg-white/[0.02] transition-colors cursor-pointer opacity-60">
                                        <div className="flex items-start gap-3">
                                            <div className="relative">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white text-xs font-bold">AP</div>
                                                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#E4405F] flex items-center justify-center text-[8px]">📷</div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between mb-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-400">Ananya Patel</span>
                                                        <Clock className="w-3 h-3 text-amber-400" />
                                                    </div>
                                                    <span className="text-[10px] text-amber-400">Tomorrow 9AM</span>
                                                </div>
                                                <p className="text-xs text-gray-400 truncate">Waiting for stock update on blue variant</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* More indicator */}
                                    <div className="p-3 text-center">
                                        <span className="text-xs text-gray-400">32 more conversations</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Channel Icons */}
                            <div className="absolute -left-8 top-1/4 flex flex-col gap-2">
                                {channels.slice(0, 4).map((channel, i) => (
                                    <div
                                        key={channel.name}
                                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-lg animate-float"
                                        style={{
                                            backgroundColor: `${channel.color}20`,
                                            border: `1px solid ${channel.color}40`,
                                            animationDelay: `${i * 0.2}s`
                                        }}
                                    >
                                        {channel.svg}
                                    </div>
                                ))}
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -right-4 top-8 bg-[#0C0E12] border border-white/10 rounded-lg p-3 shadow-xl animate-float">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span className="text-xs text-white font-medium">SLA: 98.2%</span>
                                </div>
                            </div>

                            {/* Keyboard Shortcut Hint */}
                            <div className="absolute -right-4 bottom-8 bg-[#0C0E12] border border-white/10 rounded-lg p-2 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-2">
                                    <Keyboard className="w-3 h-3 text-gray-400" />
                                    <div className="flex gap-1">
                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-gray-400">R</span>
                                        <span className="text-[10px] text-gray-400">Resolve</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 8+ Channels Section */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-medium text-white tracking-tighter leading-[1.1]"
                        >
                            8+ channels—<br />one unified view
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-xl text-gray-400 leading-relaxed max-w-lg"
                        >
                            Each channel shows its own branded avatar with channel-specific color tints for instant visual recognition.
                        </motion.div>
                    </div>

                    {/* Channel Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {channels.map((channel, index) => (
                            <motion.div
                                key={channel.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group p-6 rounded-2xl bg-[#0C0E12] border border-white/5 hover:border-white/20 transition-all duration-500"
                                style={{
                                    '--channel-color': channel.color,
                                } as React.CSSProperties}
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform group-hover:scale-110"
                                    style={{ backgroundColor: `${channel.color}20`, border: `1px solid ${channel.color}40` }}
                                >
                                    {channel.svg}
                                </div>
                                <h3 className="text-lg font-medium text-white">{channel.name}</h3>
                                <p className="text-sm text-gray-400 mt-1">Real-time sync</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Smart Conversation List */}
            <section className="py-24 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Interactive List Visualization */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="rounded-2xl bg-[#0C0E12] border border-white/5 overflow-hidden shadow-2xl">
                                {/* Header */}
                                <div className="p-4 border-b border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-white">All Conversations</span>
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400">32</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400">Assigned to Me</button>
                                        <button className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400">Unassigned</button>
                                    </div>
                                </div>

                                {/* Signal Legend */}
                                <div className="p-4 border-b border-white/5 bg-white/[0.01]">
                                    <div className="flex items-center gap-4 text-[10px]">
                                        <span className="text-gray-400">Priority signals:</span>
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 rounded-full bg-red-500" />
                                            <span className="text-gray-400">Critical</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 rounded-full bg-orange-500" />
                                            <span className="text-gray-400">Warning</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 rounded-full bg-purple-500" />
                                            <span className="text-gray-400">Needs Human</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 rounded-full bg-gray-500" />
                                            <span className="text-gray-400">Healthy</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Sample Conversations */}
                                <div className="divide-y divide-white/5">
                                    <div className="p-4 flex items-center gap-4">
                                        <div className="relative">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600" />
                                            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center shadow-[0_0_6px_rgba(168,85,247,0.6)]">
                                                <span className="text-[8px] text-white font-bold">2</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-white">Customer Name</span>
                                                <Crown className="w-3 h-3 text-amber-400" />
                                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400">VIP</span>
                                            </div>
                                            <p className="text-xs text-gray-400 truncate mt-1">Latest message preview...</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[10px] text-gray-400">now</div>
                                            <div className="text-[9px] px-1.5 py-0.5 rounded bg-green-500/10 text-green-400 mt-1">₹8,999</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="p-4 bg-gradient-to-t from-blue-500/5 to-transparent">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">Unread indicators</span>
                                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">Revenue tags</span>
                                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">VIP badges</span>
                                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">Relative time</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                                Smart Conversation<br />
                                <span className="text-gray-400">List</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                Intercom-style conversation cards packed with intelligence signals. See everything at a glance without opening the thread.
                            </p>

                            <div className="grid gap-4">
                                {features.map((group, i) => (
                                    <div key={group.category} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                        <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                                            <div className="w-6 h-6 rounded bg-blue-500/10 flex items-center justify-center">
                                                <span className="text-xs text-blue-400">{i + 1}</span>
                                            </div>
                                            {group.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {group.items.map((item) => (
                                                <span key={item} className="text-xs text-gray-400 flex items-center gap-1">
                                                    <CheckCircle className="w-3 h-3 text-blue-400" />
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Workflow Features Grid */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4"
                        >
                            Built for agent workflows
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-400 max-w-2xl mx-auto"
                        >
                            Every feature designed to help agents work faster and smarter.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {workflowFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-[24px] bg-[#0C0E12] border border-white/5 hover:border-blue-500/30 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <feature.icon className="w-7 h-7 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-medium text-white mb-3 tracking-tight">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Sidebar */}
            <section className="py-24 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                                360° Customer<br />
                                <span className="text-gray-400">Context</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                Everything you need to know about the customer, right in the sidebar. No more context switching.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: Users, title: "Identity Block", desc: "Avatar, name, contact info, customer type badges, high-risk indicators" },
                                    { icon: Sparkles, title: "AI Intelligence", desc: "Detected intent, topic classification, risk score, AI insight summary" },
                                    { icon: FileText, title: "Shopify Orders", desc: "Recent orders with status, total spend, order count" },
                                    { icon: MessageSquare, title: "Conversation History", desc: "Past conversations with status badges, click to navigate" },
                                    { icon: Tag, title: "Linked Identities", desc: "Cross-channel customer identity linking, unified profiles" }
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                                            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Sidebar Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-2xl bg-[#0C0E12] border border-white/5 overflow-hidden shadow-2xl max-w-sm mx-auto">
                                {/* Customer Header */}
                                <div className="p-6 border-b border-white/5 text-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 mx-auto mb-3 flex items-center justify-center text-xl font-bold text-white">PS</div>
                                    <h3 className="text-lg font-medium text-white">Priya Sharma</h3>
                                    <p className="text-xs text-gray-400">+91 98765 43210 • priya@email.com</p>
                                    <div className="flex justify-center gap-2 mt-3">
                                        <span className="text-[10px] px-2 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                                            <Crown className="w-3 h-3" /> VIP
                                        </span>
                                        <span className="text-[10px] px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">Returning</span>
                                    </div>
                                </div>

                                {/* AI Intelligence */}
                                <div className="p-4 border-b border-white/5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Sparkles className="w-4 h-4 text-violet-400" />
                                        <span className="text-xs font-medium text-white">AI Intelligence</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-400">Intent</span>
                                            <span className="text-blue-400">Order Status</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-400">Risk Score</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-16 h-1.5 rounded-full bg-white/10 overflow-hidden">
                                                    <div className="w-[25%] h-full bg-emerald-500 rounded-full" />
                                                </div>
                                                <span className="text-emerald-400">Low</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Orders */}
                                <div className="p-4 border-b border-white/5">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-medium text-white">Shopify Orders</span>
                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between p-2 rounded bg-white/[0.02]">
                                            <div>
                                                <div className="text-xs text-white">#EN-99821</div>
                                                <div className="text-[10px] text-gray-400">2 items • ₹12,499</div>
                                            </div>
                                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400">Shipping</span>
                                        </div>
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-white/5 flex justify-between text-xs">
                                        <span className="text-gray-400">Total Spend</span>
                                        <span className="text-white font-medium">₹1,24,500</span>
                                    </div>
                                </div>

                                {/* Team Chat */}
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-medium text-white">Internal Notes</span>
                                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                                    </div>
                                    <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
                                        <div className="flex items-start gap-2">
                                            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white">J</div>
                                            <div>
                                                <span className="text-[10px] text-gray-400">John • 10m ago</span>
                                                <p className="text-xs text-gray-300 mt-1">VIP customer, prioritize this request</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating decoration */}
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Keyboard Shortcuts */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Shortcuts Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[32px] bg-[#0C0E12] border border-white/5"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                                    <Keyboard className="w-5 h-5 text-violet-400" />
                                </div>
                                <h3 className="text-xl font-medium text-white">Keyboard Shortcuts</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { key: "R", action: "Resolve conversation" },
                                    { key: "T", action: "Take/assign to me" },
                                    { key: "/", action: "Focus search" },
                                    { key: "Esc", action: "Close conversation" },
                                    { key: "⌘E", action: "Export conversations" },
                                    { key: "⇧E", action: "Mark as read" },
                                    { key: "?", action: "Show shortcuts modal" },
                                    { key: "⌘K", action: "Command palette" }
                                ].map((shortcut) => (
                                    <div key={shortcut.key} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                        <span className="px-2 py-1 rounded bg-white/10 text-white text-xs font-mono min-w-[32px] text-center">{shortcut.key}</span>
                                        <span className="text-sm text-gray-400">{shortcut.action}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                                Power-user<br />
                                <span className="text-gray-400">productivity</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                Every action is keyboard-accessible. Keep your hands on the keyboard and fly through conversations.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                    <Zap className="w-5 h-5 text-amber-400 mt-1" />
                                    <div>
                                        <h4 className="text-white font-medium text-sm mb-1">Instant Actions</h4>
                                        <p className="text-gray-400 text-xs">Resolve, assign, snooze, and transfer without touching your mouse</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                    <Search className="w-5 h-5 text-blue-400 mt-1" />
                                    <div>
                                        <h4 className="text-white font-medium text-sm mb-1">Smart Search</h4>
                                        <p className="text-gray-400 text-xs">Debounced search with URL persistence for sharing and bookmarking</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                    <LayoutGrid className="w-5 h-5 text-emerald-400 mt-1" />
                                    <div>
                                        <h4 className="text-white font-medium text-sm mb-1">Bulk Operations</h4>
                                        <p className="text-gray-400 text-xs">Select multiple conversations and act on them all at once</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Summary Table */}
            <section className="py-24 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="rounded-[32px] bg-[#0C0E12] border border-white/5 overflow-hidden"
                    >
                        <div className="p-8 border-b border-white/5">
                            <h2 className="text-2xl font-medium text-white">Feature Summary</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
                            {[
                                { category: "Unified Inbox", capabilities: "8+ channels in one view" },
                                { category: "Smart Filtering", capabilities: "Saved views, custom filters, search" },
                                { category: "Productivity", capabilities: "Keyboard shortcuts, bulk actions" },
                                { category: "Workflow", capabilities: "Snooze, transfer, resolution" },
                                { category: "Collaboration", capabilities: "Collision detection, internal chat" },
                                { category: "Intelligence", capabilities: "AI signals, risk scores, SLA" },
                                { category: "Reliability", capabilities: "Offline queue, real-time sync" },
                                { category: "Customer Context", capabilities: "360° sidebar, Shopify integration" }
                            ].map((item, i) => (
                                <div key={item.category} className={`p-6 ${i >= 4 ? 'border-t border-white/5' : ''}`}>
                                    <h4 className="text-white font-medium mb-2">{item.category}</h4>
                                    <p className="text-sm text-gray-400">{item.capabilities}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-6 pb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative p-12 rounded-[32px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-center overflow-hidden"
                >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
                            Ready to unify your inbox?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Start free trial and bring all your channels together.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="primary" size="lg" onClick={goToSignup}>
                                    Start free trial
                                    <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Link to="/contact-sales">
                                <Button variant="secondary" size="lg">
                                    Talk to sales
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* CSS for float animation */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}

