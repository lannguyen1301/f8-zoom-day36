
# ✅ Checklist F8 – Zoom Day 36 (React Router + Layout + API)

## 0. YÊU CẦU CHUNG
- [ ] Tạo repo **f8-zoom-day36** trên GitHub
- [ ] Khởi tạo Vite React: `npm create vite@latest f8-zoom-day36 -- --template react-swc`
- [ ] Cài dependencies: `npm install`
- [ ] Cài React Router: `npm install react-router-dom`
- [ ] Cài SCSS module nếu dùng: `npm install -D sass`
- [ ] Cài gh-pages để deploy: `npm install gh-pages --save-dev`
- [ ] Mục tiêu: Multiple Layouts, Nested Routes, API, Hooks

---

## 1. BÀI 1 – SETUP MULTIPLE LAYOUTS

### 1.1. Cấu trúc thư mục
- [ ] Tạo thư mục `/src/layouts/`
- [ ] Tạo `layouts/components/Header` + file SCSS
- [ ] Tạo thư mục DefaultLayout + Footer riêng
- [ ] Tạo thư mục AuthLayout + AuthSidebar
- [ ] Tạo thư mục AdminLayout + AdminSidebar + AdminFooter
- [ ] Tạo thư mục `src/pages/` với tất cả các pages (Home, Posts, PostDetail, Login…)
- [ ] Mỗi page có 2 file: `index.jsx` + `*.module.scss`
- [ ] Tạo thư mục components (AppRoutes, ScrollToTop, Loading, Pagination)

### 1.2. Setup Layouts
#### DefaultLayout:
- [ ] Import Header chung
- [ ] Import Footer riêng
- [ ] Dùng `<Outlet />` render page con
- [ ] Áp dụng cho routes: `/`, `/about`, `/posts`, `/posts/:id`, `/contact`, `/privacy`

#### AuthLayout:
- [ ] Import Header chung
- [ ] Import AuthSidebar
- [ ] Không có Footer
- [ ] Áp dụng cho `/login`, `/register`

#### AdminLayout:
- [ ] Header riêng
- [ ] Import AdminSidebar
- [ ] Import AdminFooter
- [ ] Áp dụng cho `/admin`, `/admin/users`, `/admin/settings`

#### NotFound:
- [ ] Tự tạo layout riêng
- [ ] Dùng path `*`

### 1.3. Cấu hình Routes
- [ ] Import `HashRouter` (để deploy GitHub Pages)
- [ ] Tạo `AppRoutes/index.jsx`
- [ ] Setup nested routes cho từng layout
- [ ] Setup routes cho pages tương ứng
- [ ] Setup route NotFound với `path="*"`

---

## 2. BÀI 2 – POSTS LIST + PAGINATION

### 2.1. Posts Page Logic
- [ ] Tạo state: posts, isLoading
- [ ] Dùng `useSearchParams()` để lấy query ?page=
- [ ] Nếu không có page → mặc định page 1
- [ ] Dùng `useEffect()` để:
  - [ ] Fetch API `https://jsonplaceholder.typicode.com/posts`
  - [ ] Tính toán totalPages = 100/20
  - [ ] Cắt mảng theo page
- [ ] Hiển thị Loading khi đang fetch
- [ ] Hiển thị danh sách 20 bài viết
- [ ] Gọi Pagination component

### 2.2. Pagination Component
- [ ] Nhận props: currentPage, totalPages, onPageChange
- [ ] Render nút: First, Prev, 1–2–3…, Next, Last
- [ ] Disable nút khi cần
- [ ] Trang active highlight
- [ ] Click gọi onPageChange(page)
- [ ] Posts page truyền hàm `setSearchParams`

---

## 3. BÀI 3 – POST DETAIL + COMMENTS
- [ ] Dùng `useParams()` lấy id
- [ ] Dùng `useEffect()` gọi 2 API:
  - [ ] `/posts/:id`
  - [ ] `/posts/:id/comments`
- [ ] Nếu API trả 404 → dùng `navigate("/posts", { replace: true })`
- [ ] Hiển thị Loading
- [ ] Render post (title, body, userId)
- [ ] Render comments list

---

## 4. BÀI 4 – SCROLL TO TOP
- [ ] Tạo component ScrollToTop
- [ ] Import useLocation + useEffect
- [ ] Theo dõi pathname → scrollTo(0,0)
- [ ] Import vào AppRoutes bên trong Router

---

## 5. BÀI 5 – CONTACT & PRIVACY
- [ ] Tạo page Contact + nội dung dài
- [ ] Tạo page Privacy + nội dung dài
- [ ] Trong Footer (DefaultLayout) thêm link đến 2 trang này
- [ ] Test scroll xuống bottom → click → page mới scroll lên top

---

## 6. DEPLOY GITHUB PAGES
- [ ] Cài gh-pages: `npm install gh-pages --save-dev`
- [ ] Thêm `"homepage"` vào package.json
- [ ] Thêm script:
  - [ ] `"build": "vite build"`
  - [ ] `"deploy": "gh-pages -d dist"`
- [ ] Chuyển BrowserRouter → HashRouter
- [ ] Build: `npm run build`
- [ ] Deploy: `npm run deploy`
- [ ] Vào Settings → Pages → chọn branch `gh-pages`

---

## 7. KIỂM TRA LẠI TOÀN BỘ
- [ ] Layout hoạt động đúng
- [ ] Nested routes đúng
- [ ] Pagination giữ query khi F5
- [ ] ScrollToTop hoạt động
- [ ] NotFound chạy đúng
- [ ] API fetch đúng logic
- [ ] Code sạch và dễ đọc
