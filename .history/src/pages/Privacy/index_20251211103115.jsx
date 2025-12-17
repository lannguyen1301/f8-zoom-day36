import "@styles/main.scss";
import styles from "./Privacy.module.scss";

// Components
import Section from "@ui/Section";
import Div from "@ui/Div";
import Title from "@ui/Title";
import Para from "@ui/Para";
import SubsectionTitle from "@ui/SubsectionTitle";
import Ul from "@ui/Ul";
import Li from "@ui/Li";

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

                    <Div className={styles.policyList}>
                        <Div className={styles.policyCard}>
                            <Div className={styles.cardHeader}>
                                <Div className={styles.cardIcon}>
                                    <i className="fas fa-shield-alt"></i>
                                </Div>
                                <SubsectionTitle className={styles.cardTitle}>
                                    1. Thông tin chúng tôi thu thập
                                </SubsectionTitle>
                            </Div>
                            <Div className={styles.cardContent}>
                                <Ul>
                                    <Li>
                                        Thông tin liên hệ (họ tên, email, số
                                        điện thoại, công ty)
                                    </Li>
                                    <Li>
                                        Thông tin thanh toán (khi bạn sử dụng
                                        dịch vụ trả phí)
                                    </Li>
                                    <Li>
                                        Dữ liệu sử dụng website (IP, trình
                                        duyệt, trang đã xem)
                                    </Li>
                                    <Li>
                                        Cookies và công nghệ theo dõi tương tự
                                    </Li>
                                </Ul>
                            </Div>
                        </Div>

                        <Div className={styles.policyCard}>
                            <Div className={styles.cardHeader}>
                                <Div className={styles.cardIcon}>
                                    <i className="fas fa-lock"></i>
                                </Div>
                                <SubsectionTitle className={styles.cardTitle}>
                                    2. Cách chúng tôi sử dụng thông tin
                                </SubsectionTitle>
                            </Div>
                            <Div className={styles.cardContent}>
                                <Ul>
                                    <Li>
                                        - Cung cấp, vận hành và cải thiện dịch
                                        vụ tư vấn
                                    </Li>
                                    <Li>
                                        - Gửi email cập nhật, báo giá, tài liệu
                                        chuyên môn
                                    </Li>
                                    <Li>
                                        - Phân tích hành vi người dùng để nâng
                                        cao trải nghiệm
                                    </Li>
                                    <Li>- Tuân thủ các yêu cầu pháp lý</Li>
                                </Ul>
                            </Div>
                        </Div>

                        <Div className={styles.policyCard}>
                            <Div className={styles.cardHeader}>
                                <Div className={styles.cardIcon}>
                                    <i className="fas fa-users"></i>
                                </Div>
                                <SubsectionTitle className={styles.cardTitle}>
                                    3. Chia sẻ thông tin với bên thứ ba
                                </SubsectionTitle>
                            </Div>
                            <Div className={styles.cardContent}>
                                <Para>
                                    Chúng tôi <strong>không bán</strong> thông
                                    tin cá nhân của bạn. Thông tin chỉ được chia
                                    sẻ với:
                                </Para>
                                <Ul>
                                    <Li>
                                        - Đối tác thanh toán (Stripe, PayPal...)
                                    </Li>
                                    <Li>
                                        - Nhà cung cấp dịch vụ đám mây (Google
                                        Cloud, AWS)
                                    </Li>
                                    <Li>
                                        - Cơ quan pháp luật khi có yêu cầu hợp
                                        pháp
                                    </Li>
                                </Ul>
                            </Div>
                        </Div>

                        <Div className={styles.policyCard}>
                            <Div className={styles.cardHeader}>
                                <Div className={styles.cardIcon}>
                                    <i className="fas fa-cookie-bite"></i>
                                </Div>
                                <SubsectionTitle className={styles.cardTitle}>
                                    4. Cookies & Công nghệ theo dõi
                                </SubsectionTitle>
                            </Div>
                            <Div className={styles.cardContent}>
                                <Para>Chúng tôi sử dụng cookies để:</Para>
                                <Ul>
                                    <Li>- Ghi nhớ sở thích của bạn</Li>
                                    <Li>- Phân tích lưu lượng truy cập</Li>
                                    <Li>
                                        - Hiển thị quảng cáo phù hợp (nếu có)
                                    </Li>
                                </Ul>
                                <Para>
                                    Bạn có thể tắt cookies trong cài đặt trình
                                    duyệt bất kỳ lúc nào.
                                </Para>
                            </Div>
                        </Div>

                        <Div className={styles.policyCard}>
                            <Div className={styles.cardHeader}>
                                <Div className={styles.cardIcon}>
                                    <i className="fas fa-user-shield"></i>
                                </Div>
                                <SubsectionTitle className={styles.cardTitle}>
                                    5. Quyền của bạn
                                </SubsectionTitle>
                            </Div>
                            <Div className={styles.cardContent}>
                                <Para>Bạn có quyền:</Para>
                                <Ul>
                                    <Li>- Yêu cầu truy cập dữ liệu cá nhân</Li>
                                    <Li>
                                        - Yêu cầu xóa hoặc chỉnh sửa thông tin
                                    </Li>
                                    <Li>
                                        - Hủy đăng ký nhận email marketing bất
                                        kỳ lúc nào
                                    </Li>
                                    <Li>
                                        - Khiếu nại lên cơ quan bảo vệ dữ liệu
                                    </Li>
                                </Ul>
                            </Div>
                        </Div>

                        <Div className={styles.policyCard}>
                            <Div className={styles.cardHeader}>
                                <Div className={styles.cardIcon}>
                                    <i className="fas fa-envelope"></i>
                                </Div>
                                <SubsectionTitle className={styles.cardTitle}>
                                    6. Liên hệ
                                </SubsectionTitle>
                            </Div>
                            <Div className={styles.cardContent}>
                                <Para>
                                    Nếu bạn có bất kỳ câu hỏi nào về chính sách
                                    bảo mật, vui lòng liên hệ:
                                </Para>
                                <Ul className={styles.privacyList}>
                                    <Li className={styles.privacyItem}>
                                        - Email: privacy@navis.com
                                    </Li>
                                    <Li className={styles.privacyItem}>
                                        - Hotline 1900 1234
                                    </Li>
                                    <Li className={styles.privacyItem}>
                                        - Địa chỉ 123 Đường Láng, Hà Nội, Việt
                                        Nam
                                    </Li>
                                </Ul>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Section>
        </>
    );
}
export default Privacy;
