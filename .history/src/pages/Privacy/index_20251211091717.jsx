import "@styles/main.scss";
import styles from "./Privacy.module.scss";

function Privacy() {
    return (
        <>
            <Section className="container">
                <Div className={styles.privacy}>
                    <Title></Title>
                    <h1>Chính sách bảo mật</h1>
                    <p class="intro">
                        Chúng tôi cam kết bảo vệ quyền riêng tư của bạn. Tài
                        liệu này giải thích cách chúng tôi thu thập, sử dụng và
                        bảo vệ thông tin cá nhân của khách hàng và người dùng
                        website.
                    </p>

                    <div class="policy-list">
                        <div class="policy-card">
                            <div class="card-header">
                                <div class="card-icon">
                                    <i class="fas fa-shield-alt"></i>
                                </div>
                                <h3 class="card-title">
                                    1. Thông tin chúng tôi thu thập
                                </h3>
                            </div>
                            <div class="card-content">
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

                        <div class="policy-card">
                            <div class="card-header">
                                <div class="card-icon">
                                    <i class="fas fa-lock"></i>
                                </div>
                                <h3 class="card-title">
                                    2. Cách chúng tôi sử dụng thông tin
                                </h3>
                            </div>
                            <div class="card-content">
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

                        <div class="policy-card">
                            <div class="card-header">
                                <div class="card-icon">
                                    <i class="fas fa-users"></i>
                                </div>
                                <h3 class="card-title">
                                    3. Chia sẻ thông tin với bên thứ ba
                                </h3>
                            </div>
                        </div>
                    </div>
                </Div>
            </Section>
        </>
    );
}
export default Privacy;
