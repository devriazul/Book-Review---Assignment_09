import React from "react";
import "./FAQ.css";
const FAQ = () => {
  return (
    <div>
      <div className="faq">
        <h2>Context API কি এবং এর ব্যবহার বর্ণনা কর।</h2>
        <p>
            Context API হল React এর একটি নতুন ফিচার যেটা React v16.3 থেকে যুক্ত হয়েছে। এটি ব্যবহার করে সমগ্র React অ্যাপের মধ্যে কোন একটি State কে একবার লিখে সেটি শেয়ার করে বারবার ব্যবহার করা যাই। 
        </p>
        <p>
            
        </p>
        <p>
            
        </p>
      </div>
      <div className="faq">
        <h2>Props ও State এর মধ্যে পার্থক্য কি?</h2>
        <p>
          Props ও State কে রিয়াক্ট এর খুবিই গুরুত্বপূর্ণ দুটি উপাদান বলা যাই।
          JSX এর মাধ্যমে তৈরিকৃত কম্পোনেন্টে ডাটা প্রেরণ করা ও User এর কাজের উপর
          নির্ভর করে Data পরিবর্তন করে দেখানো ক্ষেত্রে এ দুটির জুড়ি নাই! বিষয়
          দুটি আপাত দৃষ্টিতে দেখতে একই রকম দেখালেও এদের কাজের মধ্যে আছে অনেক
          তফাৎ। নিন্মে ছকের মাধ্যমে এ দুইয়ের পার্থক্য দেখানো হলঃ{" "}
        </p>
        <table>
          <thead>
            <tr>
              <th>Props</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Props হল read only অর্থাৎ ডাটা পেলে সেটিকে ব্যবহার করা যাবে
                কিন্তু পরিবর্তন করা যাবে না।{" "}
              </td>
              <td>State এর ডাটা পরিবর্তন যোগ্য।</td>
            </tr>
            <tr>
              <td>Props হয় immutable বা অপরিবর্তনীয়। </td>
              <td>State হল mutable বা পরিবর্তনযোগ্য। </td>
            </tr>
            <tr>
              <td>Props কে তার child component access করতে পারে।</td>
              <td>State কে তার child component access করতে পারে না। </td>
            </tr>
            <tr>
              <td>এটি components কে reusable (পুনারায় ব্যবহার) করতে পারে। </td>
              <td>
                এটি components কে reusable (পুনারায় ব্যবহার) করতে পারে না।
              </td>
            </tr>
            <tr>
              <td>Stateless component এ Props থাকতে পারে। </td>
              <td>Stateless component এ Props থাকতে পারে না। </td>
            </tr>
          </tbody>
        </table>
        <p>
          উপরিক্ত আলোচনার মাধ্যমে আমরা Props ও State সম্পর্কে সাধারণ কিছু তথ্য ও
          এদের মধ্যে পার্থক্য সম্পর্কে জানতে পারলাম, এগুলো নিয়ে কাজ করার সময়
          আমাদের উক্ত বিষয়গুলি খেয়াল রেখেই সঠিকভাবে ব্যবহার করতে হবে নতুবা,
          কাঙ্ক্ষিত ফলাফল না পাওয়া ছাড়াও বিভিন্ন সমস্যার সম্মুখীন হতে হবে।{" "}
        </p>
      </div>
    </div>
  );
};

export default FAQ;
