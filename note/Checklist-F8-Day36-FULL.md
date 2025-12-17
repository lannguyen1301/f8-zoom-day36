# Checklist Day 36 – React Router Multiple Layouts & API Integration  
(Full Version)

## ✅ 0. YÊU CẦU CHUNG
- Tạo repo **f8-zoom-day36** trên GitHub.  
- Dùng Vite + React + JavaScript + SWC  
  ```
  npm create vite@latest f8-zoom-day36 -- --template react-swc
  cd f8-zoom-day36 && npm install
  ```
- Cài React Router v7:
  ```
  npm install react-router-dom
  ```
- Cài SCSS (nếu dùng SCSS Modules):
  ```
  npm install -D sass
  ```
- Mục tiêu:
  - Multiple layouts + nested routes
  - API fetch với useEffect
  - Hooks: useState, useEffect, useParams, useSearchParams, useNavigate, useLocation
  - Clean code + cấu trúc rõ ràng.

---

## ✅ 1. BÀI 1 – SETUP MULTIPLE LAYOUTS

### **1.1. Cấu trúc thư mục**
Tạo các layout:

```
src/layouts/
  components/Header/
  DefaultLayout/
  AuthLayout/
  AdminLayout/
```

Tạo pages:

```
src/pages/
  Home
  About
  Posts
  PostDetail
  Login
  Register
  Dashboard
  Users
  Settings
  Contact
  Privacy
  NotFound
```

Tạo components:

```
src/components/
  AppRoutes/
  ScrollToTop/
  Loading/
  Pagination/
```

➡️ *Mỗi thư mục đều có `index.jsx` + `*.module.scss`.*

---

### **1.2. Setup Layouts**

#### **DefaultLayout**
Dùng cho:
- `/`
- `/about`
- `/posts`
- `/posts/:id`
- `/contact`
- `/privacy`

Yêu cầu:
- Import Header chung
- Import Footer riêng
- Dùng `<Outlet />`

#### **AuthLayout**
Dùng cho:
- `/login`
- `/register`

Yêu cầu:
- Import Header chung
- Sidebar riêng
- Không có Footer
- Dùng `<Outlet />`

#### **AdminLayout**
Dùng cho:
- `/admin`
- `/admin/users`
- `/admin/settings`

Yêu cầu:
- Header riêng
- Sidebar riêng
- Footer riêng
- `<Outlet />`

#### **NotFound**
- Không dùng layout nào
- Path: `*`

---

### **1.3. Cấu hình Routes (AppRoutes)**

Ví dụ cấu trúc:

```jsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";

<Router>
  <ScrollToTop />
  <Routes>

    <Route element={<DefaultLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="posts" element={<Posts />} />
      <Route path="posts/:id" element={<PostDetail />} />
      <Route path="contact" element={<Contact />} />
      <Route path="privacy" element={<Privacy />} />
    </Route>

    <Route element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>

    <Route path="admin" element={<AdminLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="settings" element={<Settings />} />
    </Route>

    <Route path="*" element={<NotFound />} />

  </Routes>
</Router>
```

---

## ✅ 2. BÀI 2 – POSTS LIST + PAGINATION + API

### **2.1. Posts Page**

#### Hooks cần dùng:
- `useState`
- `useEffect`
- `useSearchParams`

#### API:
```
GET https://jsonplaceholder.typicode.com/posts
```

#### Yêu cầu:
- Hiển thị 20 posts / page.
- Pagination phải đổi URL theo dạng:
  - `?page=1`
  - `?page=2`
- Khi F5 phải giữ đúng page hiện tại.
- Hiển thị `<Loading />` khi đang tải.

#### Logic CRUD:
1. Lấy page hiện tại từ URL:
   ```js
   const [searchParams] = useSearchParams();
   const currentPage = Number(searchParams.get("page")) || 1;
   ```
2. Gọi API bằng `useEffect`.
3. Lưu toàn bộ bài viết vào state.
4. Tính totalPages.
5. Cắt mảng để hiển thị đúng 20 bài theo page.

---

### **2.2. Pagination Component**

Props:
- `currentPage`
- `totalPages`
- `onPageChange(newPage)`

Yêu cầu UI:
- First
- Previous
- 1 2 3 ...
- Next
- Last

Disable logic:
- Trang 1 → disable First + Previous
- Trang cuối → disable Last + Next

Khi click:
- Gọi `onPageChange(newPage)`

Ở Posts Page:
```jsx
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={handlePageChange}
/>
```

---

## ✅ 3. BÀI 3 – POST DETAIL + COMMENTS

### API:
```
GET https://jsonplaceholder.typicode.com/posts/:id
GET https://jsonplaceholder.typicode.com/posts/:id/comments
```

### Hooks cần dùng:
- useParams
- useNavigate
- useEffect

### Logic:
1. Lấy id từ URL.
2. Gọi API lấy post.
3. Nếu 404:
   ```
   navigate("/posts", { replace: true })
   ```
4. Lấy comments.
5. Hiển thị `<Loading />` khi đang tải.
6. Render post + comments.

---

## ✅ 4. BÀI 4 – SCROLL TO TOP

File: `src/components/ScrollToTop/index.js`

```js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
```

Dùng trong AppRoutes:
```jsx
<Router>
  <ScrollToTop />
  <Routes>…</Routes>
</Router>
```

---

## ✅ 5. BÀI 5 – CONTACT & PRIVACY

- Tạo page có nội dung đủ dài.
- Thêm link vào Footer của DefaultLayout:
  - Contact
  - Privacy
- Kiểm tra ScrollToTop hoạt động.

---

## ✅ 6. DEPLOY LÊN GITHUB PAGES

### Cài:
```
npm install gh-pages --save-dev
```

### package.json:
```json
"homepage": "https://<username>.github.io/f8-zoom-day36",
"scripts": {
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

### Dùng HashRouter để tránh lỗi 404:
```js
import { HashRouter } from "react-router-dom";
```

### Deploy:
```
npm run build
npm run deploy
```

---

## ✅ 7. CHECK TRƯỚC KHI NỘP

### **Layouts đúng chưa?**
- DefaultLayout chạy đúng route?
- AuthLayout chỉ cho login/register?
- AdminLayout đúng 3 pages chưa?
- NotFound chạy với path * ?

### **API hoạt động chưa?**
- Posts gọi API OK?
- PostDetail + comments hiển thị đúng?
- Loading state hoạt động?

### **Pagination:**
- URL có ?page=?
- F5 giữ đúng trang?
- Nút First/Prev/Next/Last disable đúng?

### **ScrollToTop:**
- Chuyển trang có kéo về đầu?

### **404:**
- URL sai có vào NotFound?

### **Clean Code:**
- Tách component hợp lý
- Tên file đúng chuẩn
- Có comment ở chỗ logic phức tạp
- SCSS Modules không bị trùng class

---

## 🎉 HOÀN THÀNH CHECKLIST DAY 36  
Bạn có thể tick từng mục trực tiếp trong file Markdown này!
