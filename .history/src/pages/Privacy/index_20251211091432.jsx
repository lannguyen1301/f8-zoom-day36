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
                </Div>
            </Section>
        </>
    );
}
export default Privacy;
