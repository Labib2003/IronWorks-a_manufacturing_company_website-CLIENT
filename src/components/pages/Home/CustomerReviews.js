import React from "react";
import { useQuery } from "react-query";
import FailedToFetch from "../../shared/FailedToFetch";
import LoadingSpinner from "../../shared/LoadingSpinner";
import CustomerReview from "./CustomerReview";

const CustomerReviews = () => {
  const {
    isLoading,
    error,
    data: reviews,
  } = useQuery("reviews", () =>
    fetch("https://ironworks-backend.onrender.com/api/v1/reviews", {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (error) {
    return <FailedToFetch></FailedToFetch>;
  }
  return (
    <div className="mb-32">
      <h1 className="text-5xl font-bold text-center mb-10">Customer Reviews</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {reviews.data.map((review) => (
          <CustomerReview key={review._id} review={review}></CustomerReview>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
