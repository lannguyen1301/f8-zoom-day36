import "@styles/main.scss";
import styles from "./Privacy.module.scss";

// Components
import Section from "@ui/Section";
import Div from "@ui/Div";
import Title from "@ui/Title";

function Privacy() {
    return (
        <>
            <Section className="container">
                <Div className={styles.privacy}>
                    <Title className={styles.privacyTitle}>
                        Chính sách bảo mật
                    </Title>
                    <Para className={styles.intro}>
                        Chúng tôi cam kết bảo vệ quyền riêng tư của bạn. Tài
                        liệu này giải thích cách chúng tôi thu thập, sử dụng và
                        bảo vệ thông tin cá nhân của khách hàng và người dùng
                        website.
                    </Para>

                    <Div className={styles.policy - list}>
                        <Div className={styles.policy - card}>
                            <Div className={styles.card - header}>
                                <Div className={styles.card - icon}>
                                    <i className="fas fa-shield-alt"></i>
                                </Div>
                                <h3 className={styles.card - title}>
                                    1. Thông tin chúng tôi thu thập
                                </h3>
                            </Div>
                            <Div className={styles.card - content}>
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
                            </Div>
                        </Div>

                        <Div className={styles.policy - card}>
                            <Div className={styles.card - header}>
                                <Div className={styles.card - icon}>
                                    <i className="fas fa-lock"></i>
                                </Div>
                                <h3 className={styles.card - title}>
                                    2. Cách chúng tôi sử dụng thông tin
                                </h3>
                            </Div>
                            <Div className={styles.card - content}>
                                <Para>
                                    - Cung cấp, vận hành và cải thiện dịch vụ tư
                                    vấn
                                </Para>
                                <Para>
                                    - Gửi email cập nhật, báo giá, tài liệu
                                    chuyên môn
                                </Para>
                                <Para>
                                    - Phân tích hành vi người dùng để nâng cao
                                    trải nghiệm
                                </Para>
                                - Tuân thủ các yêu cầu pháp lý
                            </Div>
                        </Div>

                        <Div className={styles.policy - card}>
                            <Div className={styles.card - header}>
                                <Div className={styles.card - icon}>
                                    <i className="fas fa-users"></i>
                                </Div>
                                <h3 className={styles.card - title}>
                                    3. Chia sẻ thông tin với bên thứ ba
                                </h3>
                            </Div>
                            <Div className={styles.card - content}>
                                <Para>
                                    Chúng tôi <strong>không bán</strong> thông
                                    tin cá nhân của bạn. Thông tin chỉ được chia
                                    sẻ với:
                                </Para>
                                <Para>
                                    - Đối tác thanh toán (Stripe, PayPal...)
                                </Para>
                                <Para>
                                    - Nhà cung cấp dịch vụ đám mây (Google
                                    Cloud, AWS)
                                </Para>
                                <Para>
                                    - Cơ quan pháp luật khi có yêu cầu hợp pháp
                                </Para>
                            </Div>
                        </Div>

                        <Div className={styles.policy - card}>
                            <Div className={styles.card - header}>
                                <Div className={styles.card - icon}>
                                    <i className="fas fa-cookie-bite"></i>
                                </Div>
                                <h3 className={styles.card - title}>
                                    4. Cookies & Công nghệ theo dõi
                                </h3>
                            </Div>
                            <Div className={styles.card - content}>
                                <Para>Chúng tôi sử dụng cookies để:</Para>
                                <Para>- Ghi nhớ sở thích của bạn</Para>
                                <Para>- Phân tích lưu lượng truy cập</Para>
                                <Para>
                                    - Hiển thị quảng cáo phù hợp (nếu có)
                                </Para>
                                <Para>
                                    Bạn có thể tắt cookies trong cài đặt trình
                                    duyệt bất kỳ lúc nào.
                                </Para>
                            </Div>
                        </Div>

                        <Div className={styles.policy - card}>
                            <Div className={styles.card - header}>
                                <Div className={styles.card - icon}>
                                    <i className="fas fa-user-shield"></i>
                                </Div>
                                <h3 className={styles.card - title}>
                                    5. Quyền của bạn
                                </h3>
                            </Div>
                            <Div className={styles.card - content}>
                                <Para>Bạn có quyền:</Para>
                                <Para>- Yêu cầu truy cập dữ liệu cá nhân</Para>
                                <Para>
                                    - Yêu cầu xóa hoặc chỉnh sửa thông tin
                                </Para>
                                <Para>
                                    - Hủy đăng ký nhận email marketing bất kỳ
                                    lúc nào
                                </Para>
                                <Para>
                                    - Khiếu nại lên cơ quan bảo vệ dữ liệu
                                </Para>
                            </Div>
                        </Div>

                        <Div className={styles.policy - card}>
                            <Div className={styles.card - header}>
                                <Div className={styles.card - icon}>
                                    <i className="fas fa-envelope"></i>
                                </Div>
                                <h3 className={styles.card - title}>
                                    6. Liên hệ
                                </h3>
                            </Div>
                            <Div className={styles.card - content}>
                                <Para>
                                    Nếu bạn có bất kỳ câu hỏi nào về chính sách
                                    bảo mật, vui lòng liên hệ:
                                </Para>
                                <Para>Email: privacy@navis.com</Para>
                                <Para>Hotline 1900 1234</Para>
                                <Para>
                                    Địa chỉ 123 Đường Láng, Hà Nội, Việt Nam
                                </Para>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Section>
        </>
    );
}
export default Privacy;
