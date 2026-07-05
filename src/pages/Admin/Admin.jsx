import { useState } from 'react';

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('project');

    // Generic submit handler to reduce duplicated code
    const handleDatabaseUpload = async (e, endpoint, successMessage) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
        // Convert input fields dynamically into a clean JSON data object
        const dataObject = Object.fromEntries(formData.entries());
        
        // Handle comma-separated arrays gracefully (e.g., tags or tech stacks)
        if (dataObject.technologies) {
            dataObject.technologies = dataObject.technologies.split(',').map(item => item.trim());
        }
        if (dataObject.images) {
            dataObject.images = dataObject.images.split(',').map(item => item.trim());
        }

        try {
            const response = await fetch(`http://localhost:5000/${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataObject)
            });

            const result = await response.json();
            if (result.insertedId) {
                alert(`🎉 ${successMessage} successfully sent to MongoDB!`);
                form.reset();
            }
        } catch (error) {
            console.error("Database sync crash:", error);
            alert("Upload failed. Make sure your local node server terminal is running!");
        }
    };

    return (
        <div className="w-full bg-slate-900 min-h-screen py-24 px-4 text-slate-100">
            <div className="max-w-3xl mx-auto space-y-8">
                
                {/* Dashboard Header */}
                <div className="border-b border-slate-800 pb-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-black tracking-tight text-white">Portfolio Content Command</h1>
                        <p className="text-slate-400 text-sm mt-1">Directly control, post, and pipe raw data into your MongoDB cluster.</p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
                        ● Cloud Connected
                    </span>
                </div>

                {/* Database Collection Selectors */}
                <div className="flex gap-2 p-1 bg-slate-950 rounded-2xl border border-slate-800/60">
                    {['project', 'skill', 'blog'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all capitalize ${
                                activeTab === tab ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/20' : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            Upload New {tab}
                        </button>
                    ))}
                </div>

                {/* DYNAMIC FORM ENGINE */}
                <div className="bg-slate-950 p-6 md:p-8 rounded-3xl border border-slate-800 shadow-2xl">
                    
                    {/* 1. PROJECT FORM SUBMISSION PANEL */}
                    {activeTab === 'project' && (
                        <form onSubmit={(e) => handleDatabaseUpload(e, 'projects', 'Project Document')} className="space-y-4">
                            <h2 className="text-lg font-bold text-violet-400 mb-2">📦 Project Specific Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" name="title" placeholder="Project Name (e.g., Tokyo Flight Sync)" required className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-violet-500" />
                                <input type="text" name="liveLink" placeholder="Live Deploy URL" className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-violet-500" />
                            </div>
                            <input type="text" name="technologies" placeholder="Tech Stack (comma separated: React, Express, Node)" required className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-violet-500" />
                            <textarea name="description" placeholder="Write a short summary description detailing features..." required rows="4" className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-violet-500" />
                            <button type="submit" className="w-full py-3 bg-violet-600 hover:bg-violet-500 font-bold text-white rounded-xl shadow-md transition-colors">Push Project to Cluster</button>
                        </form>
                    )}

                    {/* 2. SKILL FORM SUBMISSION PANEL */}
                    {activeTab === 'skill' && (
                        <form onSubmit={(e) => handleDatabaseUpload(e, 'skills', 'Skill Entry')} className="space-y-4">
                            <h2 className="text-lg font-bold text-violet-400 mb-2">⚡ Technology Skill Core</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" name="name" placeholder="Skill Name (e.g., JavaScript)" required className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-violet-500" />
                                <input type="text" name="category" placeholder="Category (e.g., Frontend, Backend, Tools)" required className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-violet-500" />
                            </div>
                            <input type="text" name="proficiency" placeholder="Proficiency (e.g., Advanced, Expert, 90%)" className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-violet-500" />
                            <button type="submit" className="w-full py-3 bg-violet-600 hover:bg-violet-500 font-bold text-white rounded-xl shadow-md transition-colors">Deploy Skill Row</button>
                        </form>
                    )}

                    {/* 3. BLOGS FORM SUBMISSION PANEL */}
                    {activeTab === 'blog' && (
                        <form onSubmit={(e) => handleDatabaseUpload(e, 'blogs', 'Blog Post')} className="space-y-4">
                            <h2 className="text-lg font-bold text-violet-400 mb-2">✍️ Publish Training Log / Experience</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" name="title" placeholder="Article Headline" required className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-violet-500" />
                                <input type="text" name="tag" placeholder="Tag Label (e.g., B-MEET Training)" required className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-violet-500" />
                            </div>
                            <input type="text" name="author" defaultValue="Khairul Alam" placeholder="Author Name" required className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-violet-500" />
                            <input type="text" name="images" placeholder="Photo Asset URLs (separated by commas for mosaic gallery layout)" required className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-violet-500" />
                            <input type="text" name="summary" placeholder="One-line snippet preview overview..." required className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-violet-500" />
                            <textarea name="content" placeholder="Type out your full article paragraph blocks cleanly here..." required rows="6" className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm w-full focus:outline-none focus:border-violet-500" />
                            <button type="submit" className="w-full py-3 bg-violet-600 hover:bg-violet-500 font-bold text-white rounded-xl shadow-md transition-colors">Broadcast Live Article</button>
                        </form>
                    )}

                </div>
            </div>
        </div>
    );
};

export default AdminPanel;