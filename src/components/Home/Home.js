import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../utilities/hooks/useReview";
import Review from "../Review/Review";
import Reviews from "../Reviews/Reviews";
import featureImg from "./../../images/book.png";
import "./Home.css";
const Home = () => {
  const [reviews, setReviews] = useReview();
  let only3reviews = reviews.slice(0, 3);
  return (
    <div>
      {/* Feature section  */}
      <div className="feature d-flex mx-5 mt-5 row">
        <div className="info  col-md-8 col-sm-12">
          <h2 className="text-start">"হাতে কলমে জাভাস্ক্রিপ্ট"</h2>
          <h6 className="mb-4 mt-4 text-start">
          জুনায়েদ আহমেদ
          </h6>
          <hr />
          <p className="text-start mt-4">
          প্রধানত স্ক্রিপ্টিং ল্যাংগুয়েজ হিসেবে পরিচিত থাকলেও জাভাস্ক্রিপ্ট এখন বিভিন্নভাবে ব্যবহৃত হচ্ছে। নােড জেএস আসার পর থেকে এখন বিভিন্ন প্রতিযােগিতামূলক প্রােগ্রামেও জাভস্ক্রিপ্ট ব্যবহার করে প্রবলেম সল্ভ করার সুযােগ থাকছে। একই সঙ্গে এর সাহায্যে ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট থেকে শুরু করে ক্রস প্ল্যাটফর্ম মােবাইল অ্যাপ্লিকেশন ডেভেলপমেন্ট, ডেস্কটপ অ্যাপ্লিকেশন ডেভেলপমেন্ট- সবই সম্ভব হচ্ছে। জাভাস্ক্রিপ্টের এত পপুলারিটির পেছনে আসল কারণ হচ্ছে এর সহজলভ্যতা। সব রকমের ডিভাইসেই কোনাে না কোনােভাবে জাভাস্ক্রিপ্ট বাই ডিফল্টভাবেই রান করানাে যায়।  
          </p>
          <p className="text-start">
          আপনার ডিভাইসে যদি ওয়েব ব্রাউজার সাপাের্ট করে, তাহলে অনেকটাই ধরে নেওয়া যায় আপনার ডিভাইসে একটা জাভাস্ক্রিপ্টের ইঞ্জিনও আছে। আর তাই আপনার ক্লাইন্টকে কোনাে অতিরিক্ত সেটআপের ঝামেলায় যাওয়া লাগে না জটিল বা সিম্পল যেকোনাে রকমের ওয়েব অ্যাপ্লিকেশন চালানাের জন্য। আর নােড জেএস এসে জাভাস্ক্রিপ্টকে ব্রাউজারের বাইরেও নিয়ে গেছে, যেখানে আপনি আপনার সিস্টেমের সঙ্গে ইন্টার্যাক্ট করতে পারবেন। এখানেই জাভাস্ক্রিপ্ট ইউনিক আর একই সঙ্গে পাওয়ারফুল। আমার এই বইতে তাই আমি এ রকম জাভাস্ক্রিপ্টকীভাবে ব্যবহার করবেন, সেগুলাে প্র্যাকটিক্যাল নলেজ আকারে তুলে ধরেছি। আশা করি এই জ্ঞান দিয়ে পরবর্তী সময়ে জাভাস্ক্রিপ্টের দুনিয়ায় আরও অনেক দূর এগিয়ে যেতে পারবেন।
          </p>
        </div>
        <div className="img col-md-4 col-sm-12">
          <img
            src={featureImg}
            alt="feature-img"
            height="400px"
            width="400px"
          />
        </div>
      </div>

      {/* Review Section  */}
      <div className="review-section">
        <div className="row m-5">
          {only3reviews.map((rev) => (
            <Review key={rev.id} rev={rev}></Review>
          ))}
        </div>
        <div className="mb-5">
          <Link to="/reviews" className="mb-5">
            See All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
