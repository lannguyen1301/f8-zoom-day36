// Star khai báo function comment vào bên trong function PostDetail
const Comment = () => {
    const initialForm = {
        name: "",
        email: "",
        body: "",
    };

    const [form, setForm] = useState(initialForm);
    const [comments, setComments] = useState([]);
    const [commentLoading, setCommentLoading] = useState(true);

    useEffect(() => {
        const API_URL = "https://jsonplaceholder.typicode.com";
        fetch(`${API_URL}/comments?postId=1`)
            .then((res) => res.json())
            .then((comments) => setComments(comments))
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                // setCommentLoading(false)
                setTimeout(() => {
                    setCommentLoading(false);
                }, 1000);
                // giả lập mạng chậm để xuất hiện loading
            });
    }, []);

    // event handleChange
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // event handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.body) return;

        const newComment = {
            id: comments.length + 1,
            name: form.name,
            email: form.email,
            body: form.body,
        };

        setComments([...comments, newComment]);
        setForm(initialForm);
    };
    return (
        <>
            <Div className={styles.commentWrapper}>
                <Title>Comment System</Title>
                <Form className={styles.formInner} onSubmit={handleSubmit}>
                    {/* chưa ok */}
                    <Input
                        className={styles.inputName}
                        autoFocus
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        required
                        spellCheck
                    />
                    {/* chưa ok */}
                    <Input
                        className={styles.inputEmail}
                        autoFocus
                        name="email"
                        placeholder="Your email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        spellCheck
                    />

                    {/* đã ok */}
                    <TextArea
                        value={form.body}
                        onChange={handleChange}
                        className={styles.InputTextArea}
                    />

                    <Button className={styles.btn} type="submit">
                        Send Comment
                    </Button>
                </Form>
                <Div className={styles.commentList}>
                    {commentLoading ? (
                        <Loading />
                    ) : (
                        comments.map((comment) => (
                            <Div
                                className={styles.commentCard}
                                key={comment.id}
                            >
                                {/* <Div className={styles.avatar}>
                                    <ImgComp name={comment.name} />
                                </Div> */}
                                <Img
                                    className={styles.bgUiImg}
                                    alt={comment.name}
                                    src={getAvatarUrl(comment.name)}
                                    name={comment.name}
                                />

                                <Div className={styles.commentContent}>
                                    <Div className={styles.commentHeader}>
                                        <Div>
                                            <SubTitle>{comment.name}</SubTitle>
                                            <Span>{comment.email}</Span>
                                        </Div>
                                        <Span>2 hrs ago</Span>
                                    </Div>
                                    <Div className={styles.text}>
                                        {comment.body}
                                    </Div>
                                </Div>
                            </Div>
                        ))
                    )}
                </Div>
            </Div>
        </>
    );
};

// End khai báo function comment vào bên trong function PostDetail
