import "@styles/main.scss";
import styles from "./Privacy.module.scss";

function Privacy() {
    return (
        <>
            <Section className="container">
                <Div className={styles.privacy}>
                    <Title className={styles.privacyTitle}>
                        Chính sách bảo mật
                    </Title>
                    <p className={styles.intro}>
                        Chúng tôi cam kết bảo vệ quyền riêng tư của bạn. Tài
                        liệu này giải thích cách chúng tôi thu thập, sử dụng và
                        bảo vệ thông tin cá nhân của khách hàng và người dùng
                        website.
                    </p>

                    <div className={styles.policy-list}>
                        <div className={styles.policy-card}>
                            <div className={styles.card-header}>
                                <div className={styles.card-icon}>
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <h3 className={styles.card-title}>
                                    1. Thông tin chúng tôi thu thập
                                </h3>
                            </div>
                            <div className={styles.card-content}>
                                <ul>
                                    <li>
                                        Thông tin liên hệ (họ tên, email, số
                                        điện thoại, công ty)
                                    </li>
                                    <li>
                                        Thông tin thanh toán (khi bạn sử dụng
                                        dịch vụ trả phí)
                                    </li>
                                    <li>
                                        Dữ liệu sử dụng website (IP, trình
                                        duyệt, trang đã xem)
                                    </li>
                                    <li>
                                        Cookies và công nghệ theo dõi tương tự
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.}policy-card">
                            <div className={styles.}card-header">
                                <div className={styles.}card-icon">
                                    <i className={styles.}fas fa-lock"></i>
                                </div>
                                <h3 className={styles.card-title}>
                                    2. Cách chúng tôi sử dụng thông tin
                                </h3>
                            </div>
                            <div className={styles.card-content}>
                                <p>
                                    - Cung cấp, vận hành và cải thiện dịch vụ tư
                                    vấn
                                </p>
                                <p>
                                    - Gửi email cập nhật, báo giá, tài liệu
                                    chuyên môn
                                </p>
                                <p>
                                    - Phân tích hành vi người dùng để nâng cao
                                    trải nghiệm
                                </p>
                                - Tuân thủ các yêu cầu pháp lý
                            </div>
                        </div>

                        <div className={styles.}policy-card">
                            <div className={styles.}card-header">
                                <div className={styles.}card-icon">
                                    <i className={styles.}fas fa-users"></i>
                                </div>
                                <h3 className={styles.card-title}>
                                    3. Chia sẻ thông tin với bên thứ ba
                                </h3>
                            </div>
                            <div className={styles.card-content}>
                                <p>
                                    Chúng tôi <strong>không bán</strong> thông
                                    tin cá nhân của bạn. Thông tin chỉ được chia
                                    sẻ với:
                                </p>
                                <p>- Đối tác thanh toán (Stripe, PayPal...)</p>
                                <p>
                                    - Nhà cung cấp dịch vụ đám mây (Google
                                    Cloud, AWS)
                                </p>
                                <p>
                                    - Cơ quan pháp luật khi có yêu cầu hợp pháp
                                </p>
                            </div>
                        </div>

                        <div className={styles.}policy-card">
                            <div className={styles.}card-header">
                                <div className={styles.}card-icon">
                                    <i className={styles.}fas fa-cookie-bite"></i>
                                </div>
                                <h3 className={styles.card-title}>
                                    4. Cookies & Công nghệ theo dõi
                                </h3>
                            </div>
                            <div className={styles.card-content}>
                                <p>Chúng tôi sử dụng cookies để:</p>
                                <p>- Ghi nhớ sở thích của bạn</p>
                                <p>- Phân tích lưu lượng truy cập</p>
                                <p>- Hiển thị quảng cáo phù hợp (nếu có)</p>
                                <p>
                                    Bạn có thể tắt cookies trong cài đặt trình
                                    duyệt bất kỳ lúc nào.
                                </p>
                            </div>
                        </div>

                        <div className={styles.}policy-card">
                            <div className={styles.}card-header">
                                <div className={styles.}card-icon">
                                    <i className={styles.}fas fa-user-shield"></i>
                                </div>
                                <h3 className={styles.card-title}>5. Quyền của bạn</h3>
                            </div>
                            <div className={styles.card-content}>
                                <p>Bạn có quyền:</p>
                                <p>- Yêu cầu truy cập dữ liệu cá nhân</p>
                                <p>- Yêu cầu xóa hoặc chỉnh sửa thông tin</p>
                                <p>
                                    - Hủy đăng ký nhận email marketing bất kỳ
                                    lúc nào
                                </p>
                                <p>- Khiếu nại lên cơ quan bảo vệ dữ liệu</p>
                            </div>
                        </div>

                        <div className={styles.}policy-card">
                            <div className={styles.}card-header">
                                <div className={styles.}card-icon">
                                    <i className={styles.}fas fa-envelope"></i>
                                </div>
                                <h3 className={styles.card-title}>6. Liên hệ</h3>
                            </div>
                            <div className={styles.card-content}>
                                <p>
                                    Nếu bạn có bất kỳ câu hỏi nào về chính sách
                                    bảo mật, vui lòng liên hệ:
                                </p>
                                <p>Email: privacy@navis.com</p>
                                <p>Hotline 1900 1234</p>
                                <p>Địa chỉ 123 Đường Láng, Hà Nội, Việt Nam</p>
                            </div>
                        </div>
                    </div>
                </Div>
            </Section>
        </>
    );
}
export default Privacy;
