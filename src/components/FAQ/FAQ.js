import React from "react";
import "./FAQ.css";
const FAQ = () => {
  return (
    <div>
      <div className="faq">
        <h2>FAQ. 01: Context API কি এবং এর ব্যবহার বর্ণনা কর।</h2>
        <p>
            Context API হল React এর একটি নতুন ফিচার যেটা React v16.3 থেকে যুক্ত হয়েছে। এই API অনেকটা রিডাক্সের মতোই কাজ করে। তবে ঠিক রিডাক্স না, বরং এটার কার্যপ্রণালী অন্যরকম। এটি ব্যবহার করে সমগ্র React অ্যাপের মধ্যে কোন একটি State কে একবার লিখে সেটি শেয়ার করে বারবার ব্যবহার করা যাই। 
        </p>
        <p>
            
        </p>
        <p>
            
        </p>
      </div>
      <div className="faq">
        <h2>FAQ. 02: Semantic Tag কি?</h2>
        <p>
        HTML5 সিমেন্টিক Tag গুলো HTML এ নতুন করে যোগ হয়েছে যা HTML5 আর সেগুলো হচ্ছে aside, article, section header footer সহ আরো বেশ কিছু HTML Tag আছে যেগুলো semantic Tag.{" "}
        </p>
        <table>
          <thead>
            <tr>
              <th>ট্যাগ</th>
              <th>বর্ণনা</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                article{" "}
              </td>
              <td>একটি আর্টিকেল বুঝায়</td>
            </tr>
            <tr>
              <td>aside</td>
              <td>একটি পেজ কন্টেন্টের পাশের কন্টেন্টকে বুঝায়</td>
            </tr>
            <tr>
              <td>dtails</td>
              <td>ইউজারকে দেখানোর জন্য অতিরিক্ত তথ্যকে বুঝায় </td>
            </tr>
            <tr>
              <td>figure </td>
              <td>
              ক্যাপশনসহ একটি এলিমেন্টকে বুঝায়
              </td>
            </tr>
            <tr>
              <td>footer </td>
              <td>ডকুমেন্ট অথবা সেকশনের ফুটার নির্দেশ করে</td>
            </tr>
            <tr>
              <td>header </td>
              <td>ডকুমেন্ট অথবা সেকশনের হেডার নির্দেশ করে</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FAQ;
