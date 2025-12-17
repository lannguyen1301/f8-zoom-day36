import "@styles/main.scss";
import styles from "./Privacy.module.scss";

function Privacy() {
    return (
        <>
            <Section className="container">
                <Div className={styles.privacy}>
                    <Title>Chính sách bảo mật</Title>
    <p class="intro">
      Chúng tôi cam kết bảo vệ quyền riêng tư của bạn. Tài liệu này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của khách hàng và người dùng website.
    </p>

    <div class="policy-list">

      <div class="policy-card">
        <div class="card-header">
          <div class="card-icon"><i class="fas fa-shield-alt"></i></div>
          <h3 class="card-title">1. Thông tin chúng tôi thu thập</h3>
        </div>
        <div class="card-content">
          <ul>
            <li>Thông tin liên hệ (họ tên, email, số điện thoại, công ty)</li>
            <li>Thông tin thanh toán (khi bạn sử dụng dịch vụ trả phí)</li>
            <li>Dữ liệu sử dụng website (IP, trình duyệt, trang đã xem)</li>
            <li>Cookies và công nghệ theo dõi tương tự</li>
          </ul>
        </div>
      </div>

      <div class="policy-card">
        <div class="card-header">
          <div class="card-icon"><i class="fas fa-lock"></i></div>
          <h3 class="card-title">2. Cách chúng tôi sử dụng thông tin</h3>
        </div>
        <div class="card-content">
          - Cung cấp, vận hành và cải thiện dịch vụ tư vấn<br>
          - Gửi email cập nhật, báo giá, tài liệu chuyên môn<br>
          - Phân tích hành vi người dùng để nâng cao trải nghiệm<br>
          - Tuân thủ các yêu cầu pháp lý
        </div>
      </div>

      <div class="policy-card">
        <div class="card-header">
          <div class="card-icon"><i class="fas fa-users"></i></div>
          <h3 class="card-title">3. Chia sẻ thông tin với bên thứ ba</h3>
        </div>
        <div class="card-content">
          Chúng tôi <strong>không bán</strong> thông tin cá nhân của bạn. Thông tin chỉ được chia sẻ với:<br><br>
          - Đối tác thanh toán (Stripe, PayPal...)<br>
          - Nhà cung cấp dịch vụ đám mây (Google Cloud, AWS)<br>
          - Cơ quan pháp luật khi có yêu cầu hợp pháp
        </div>
      </div>

      <div class="policy-card">
        <div class="card-header">
          <div class="card-icon"><i class="fas fa-cookie-bite"></i></div>
          <h3 class="card-title">4. Cookies & Công nghệ theo dõi</h3>
        </div>
        <div class="card-content">
          Chúng tôi sử dụng cookies để:<br>
          - Ghi nhớ sở thích của bạn<br>
          - Phân tích lưu lượng truy cập<br>
          - Hiển thị quảng cáo phù hợp (nếu có)<br><br>
          Bạn có thể tắt cookies trong cài đặt trình duyệt bất kỳ lúc nào.
        </div>
      </div>

      <div class="policy-card">
        <div class="card-header">
          <div class="card-icon"><i class="fas fa-user-shield"></i></div>
          <h3 class="card-title">5. Quyền của bạn</h3>
        </div>
        <div class="card-content">
          Bạn có quyền:<br>
          - Yêu cầu truy cập dữ liệu cá nhân<br>
          - Yêu cầu xóa hoặc chỉnh sửa thông tin<br>
          - Hủy đăng ký nhận email marketing bất kỳ lúc nào<br>
          - Khiếu nại lên cơ quan bảo vệ dữ liệu
        </div>
      </div>

      <div class="policy-card">
        <div class="card-header">
          <div class="card-icon"><i class="fas fa-envelope"></i></div>
          <h3 class="card-title">6. Liên hệ</h3>
        </div>
        <div class="card-content">
          Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật, vui lòng liên hệ:<br><br>
          Email: privacy@navis.com<br>
          Hotline 1900 1234<br>
          Địa chỉ 123 Đường Láng, Hà Nội, Việt Nam
        </div>
      </div>

    </div>
                </Div>
            </Section>
        </>
    );
}
export default Privacy;
