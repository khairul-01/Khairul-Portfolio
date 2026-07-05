import { useState } from "react";

const Blog = () => {
    // Tracks state: null = show post listings, active object = reading single full article
    const [viewingPost, setViewingPost] = useState(null);

    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "Mastering Japanese Language and Culture: My Journey with B-MEET Plus",
            author: "Khairul Alam",
            date: "March 03, 2024",
            tag: "Advanced Training",
            summary: "An intensive look into my one-month advanced training with B-MEET Plus, focusing heavily on business Japanese, engineering workspace ethics, and advanced communication frameworks.",
            content: "The B-MEET Plus program was a phenomenal milestone that built directly upon our foundational ICT training. Over an intensive month, we shifted our focus toward high-level professional integration. We dove deep into Japanese business etiquette (Keigo), corporate communication hierarchies, and collaborative agile workflows tailored to international tech teams. This training didn't just teach me vocabulary—it built the behavioral and cultural toolkit necessary to confidently bridge the gap between Bangladeshi engineering talent and global enterprise expectations.",
            // Dynamically using your actual uploaded B-MEET images
            images: [
                "https://i.ibb.co/px9t4pC/432000382-1487603411792305-7096449324897784746-n.jpg",
                "https://i.ibb.co/6BVxYg9/Whats-App-Image-2024-03-07-at-18-52-31-37ddc7d6copy.jpg"
            ],
            likes: 24,
            userLiked: false
        },
        {
            id: 2,
            title: "Exploring Japanese Language and Culture: My Experience with the B-MEET Program",
            author: "Khairul Alam",
            date: "March 29, 2023",
            tag: "ICT & Culture",
            summary: "Konnichiwa! Reflecting on my month-long immersion into the Bangladesh Miyazaki ICT Engineering Training Program, where software engineering met native Japanese instruction.",
            content: "Participating in the foundational B-MEET program opened up an entirely new path for my career. The curriculum beautifully balanced technical code preparation alongside soft skills training. Working directly under native Japanese instructors, we didn't just study software concepts—we learned how to present our projects, address design feedback, and collaborate globally using standard industry frameworks. This intense phase was instrumental in shaping my worldview regarding system engineering tracks and structural code quality.",
            // Dynamically using your actual uploaded B-MEET images
            images: [
                "https://i.ibb.co/VgVbMcc/IMGL7795.jpg",
                "https://i.ibb.co/KLrtfrh/IMGL7889.jpg"
            ],
            likes: 42,
            userLiked: false
        }
    ]);

    const toggleLike = (id) => {
        setPosts(prev => prev.map(post => {
            if (post.id !== id) return post;
            return {
                ...post,
                likes: post.userLiked ? post.likes - 1 : post.likes + 1,
                userLiked: !post.userLiked
            };
        }));
    };

    // Render Clean Single Article View (Inline layout - no top jump)
    if (viewingPost) {
        return (
            <div className="w-full bg-slate-50 min-h-screen py-24 px-4">
                <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
                    {/* Header Photo Grid */}
                    <div className="grid grid-cols-2 gap-2 p-4 bg-slate-50">
                        {viewingPost.images.map((img, idx) => (
                            <div key={idx} className="aspect-video overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                                <img src={img} alt="B-MEET Training Session" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                    <div className="p-6 md:p-10 space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-violet-50 text-violet-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                {viewingPost.tag}
                            </span>
                            <span className="text-xs font-semibold text-slate-400">| By {viewingPost.author} • {viewingPost.date}</span>
                        </div>

                        <h1 className="text-2xl md:text-4xl font-black text-slate-800 leading-tight">
                            {viewingPost.title}
                        </h1>

                        <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed border-l-4 border-violet-500 pl-4 bg-slate-50 py-3 pr-2 rounded-r-xl">
                            {viewingPost.summary}
                        </p>

                        <p className="text-slate-500 text-base leading-relaxed text-justify whitespace-pre-line">
                            {viewingPost.content}
                        </p>

                        <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                            <button 
                                onClick={() => toggleLike(viewingPost.id)}
                                className={`btn btn-sm rounded-xl gap-2 px-4 font-bold ${viewingPost.userLiked ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-slate-50 text-slate-500 border-slate-200'}`}
                            >
                                {viewingPost.userLiked ? "❤️" : "👍"} {posts.find(p => p.id === viewingPost.id).likes} Likes
                            </button>

                            <button 
                                onClick={() => setViewingPost(null)}
                                className="btn bg-slate-900 hover:bg-slate-800 text-white border-none rounded-xl font-bold btn-sm px-6 shadow-md"
                            >
                                ← Back to Articles
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Render Main Overview Cards Listing Page
    return (
        <div className="w-full bg-slate-50 min-h-screen py-24 px-4">
            {/* Minimal High-End Section Title Block */}
            <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-block px-3 py-1 bg-violet-50 text-violet-600 rounded-full text-xs font-extrabold uppercase tracking-widest mb-3">
                    B-MEET Program Logs
                </div>
                <h1 className="text-4xl font-black text-slate-800 tracking-tight">
                    Insights & Professional <span className="text-violet-600">Journeys</span>
                </h1>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-md mx-auto">
                    Documenting corporate ICT training milestones, native business language modules, and global engineering collaborations.
                </p>
            </div>

            {/* Structured Post Stream Stack Grid */}
            <div className="max-w-4xl mx-auto space-y-12">
                {posts.map((post) => (
                    <article 
                        key={post.id}
                        className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-0"
                    >
                        {/* LEFT: Multi-Image Photo Mosaic Layout showcasing YOUR actual photos */}
                        <div className="md:col-span-5 bg-slate-50 p-4 grid grid-cols-2 gap-2 items-center min-h-[200px]">
                            {post.images.map((imgUrl, imgIdx) => (
                                <div key={imgIdx} className="w-full h-full overflow-hidden rounded-xl bg-slate-200 aspect-[4/5] shadow-sm relative group">
                                    <img 
                                        src={imgUrl} 
                                        alt="Official B-MEET Event Activity Capture" 
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* RIGHT: Typography & Interaction Context */}
                        <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-xs font-bold">
                                    <span className="text-violet-600 tracking-wider uppercase bg-violet-50 px-2 py-0.5 rounded-md">{post.tag}</span>
                                    <span className="text-slate-400">• By {post.author} • {post.date}</span>
                                </div>
                                <h2 className="text-xl font-black text-slate-800 leading-snug hover:text-violet-600 transition-colors cursor-pointer" onClick={() => setViewingPost(post)}>
                                    {post.title}
                                </h2>
                                <p className="text-slate-500 text-sm leading-relaxed text-justify line-clamp-3">
                                    {post.summary}
                                </p>
                            </div>

                            {/* Control Footer Tray */}
                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                <button 
                                    onClick={() => toggleLike(post.id)}
                                    className={`btn btn-xs md:btn-sm rounded-xl gap-2 font-bold border ${
                                        post.userLiked 
                                        ? 'bg-emerald-50 text-emerald-600 border-emerald-200' 
                                        : 'bg-slate-50 text-slate-500 border-slate-200'
                                    }`}
                                >
                                    {post.userLiked ? "❤️" : "👍"} {post.likes}
                                </button>

                                <button 
                                    onClick={() => setViewingPost(post)}
                                    className="btn btn-xs md:btn-sm bg-violet-600 hover:bg-violet-700 text-white border-none rounded-xl font-bold shadow-sm"
                                >
                                    Read Article →
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog;