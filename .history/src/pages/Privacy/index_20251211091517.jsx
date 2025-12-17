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

                    <div>
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
                    </div>
                </Div>
            </Section>
        </>
    );
}
export default Privacy;
