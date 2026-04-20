
import { useState,useReducer,useEffect } from "react"
import ReviewReducer from "../reducer/reviewReducer";
import useReview from "../hooks/useReview";
import { getAllReviews } from "../service/reviewService";
import Warning from "./Warning";
export default function Comment({ movieId, moviename }) {
    // 1. Initialize action IDs to null to keep 'Delete' button visible
    const [reviewId, setReviewId] = useState(null); 
    const [reviewText, setReviewText] = useState("");
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");
    const [removeId, setRemoveId] = useState(null);
    const [rating, setRating] = useState(0);

    const [state, dispatch] = useReducer(ReviewReducer, { byIds: {}, allIds: [] });
    const reviews = useReview(state, dispatch);
    const [allReviews, setallReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    // Load data
    async function loadReviews() {
        if (!movieId) return;
        try {
            setLoading(true);
            const data = await getAllReviews(movieId);
            setallReviews(data.data || []);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadReviews();
        reviews.hydrate();
    }, [movieId]);

    // CREATE
    async function handleSubmit(e) {
        e.preventDefault();
        if (!reviewText.trim() && rating === 0) return;
        
        await reviews.create(Number(movieId), moviename, Number(rating), reviewText);
        
        // Reset
        setReviewText("");
        setRating(0);
        loadReviews(); // Refresh UI
    }

    // UPDATE
    async function handleUpdate(e) {
        e.preventDefault();
        if (!editText.trim() && rating === 0) return;

        // Use editId (the Review ID) to update
        console.log("good");
        console.log(editId,movieId,moviename,rating, editText)

        await reviews.update(editId,movieId,moviename,Number(rating), editText);
        console.log(editId,movieId,moviename,rating, editText)
        console.log("good");
        setEditId(null);
        setEditText("");
        setRating(0);
        loadReviews(); // Refresh UI
    }

    const isAnyActionActive = removeId !== null || editId !== null;

    return (
        <div className="flex flex-col gap-6">
            {/* Form Section */}
            <div className="p-4 border rounded-lg bg-gray-50">
                {!editId ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <h3 className="font-bold">Add a Review</h3>
                        <input 
                            className="border p-2"
                            type="text" 
                            placeholder="Share your thoughts..." 
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)} 
                        />
                        <div className="flex items-center gap-4">
                            <label>Rating:</label>
                            <input
                                type="number" min="0" max="5" value={rating}
                                onChange={(e) => setRating(Number(e.target.value))}
                                className="border p-1 w-16"
                            />
                            <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">Send</button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleUpdate} className="flex flex-col gap-3">
                        <h3 className="font-bold text-orange-600">Editing Review</h3>
                        <input 
                            className="border p-2"
                            type="text" 
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)} 
                        />
                        <div className="flex items-center gap-4">
                            <button type="submit" className="bg-green-600 text-white px-4 py-1 rounded">Save Changes</button>
                            <button type="button" onClick={() => setEditId(null)} className="text-gray-500">Cancel</button>
                        </div>
                    </form>
                )}
            </div>

            {/* List Section */}
            <div className="flex flex-col gap-4">
                {allReviews.map((review) => (
                    // KEY MUST BE ON THE OUTERMOST DIV
                    <div key={review.id} className="flex justify-between items-start border-b pb-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-sm font-bold">
                                    ⭐ {review.rating}/5
                                </span>
                                <small className="text-gray-400">
                                    {new Date(review.created_at).toLocaleDateString()}
                                </small>
                            </div>
                            <p className="mt-2 text-gray-700">{review.review}</p>
                        </div>

                        <div className="flex gap-2">
                            <button 
                                onClick={() => {
                                    setEditId(review.id);
                                    setEditText(review.review);
                                    setRating(review.rating);
                                }}
                                className="text-blue-500 hover:underline"
                            >
                                Edit
                            </button>

                            {!isAnyActionActive && (
                                <button
                                    onClick={() => setRemoveId(review.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded text-xs"
                                >
                                    Delete
                                </button>
                            )}

                            {removeId === review.id && (
                                <Warning 
                                    onConfirm={async () => {
                                        await reviews.remove(review.id);
                                        setRemoveId(null);
                                        loadReviews();
                                    }}
                                    onCancel={() => setRemoveId(null)}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}