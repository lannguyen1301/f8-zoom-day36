import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { Link } from "react-router";
import clsx from "clsx";

// Styles Module
import styles from "./PostDetail.module.scss";

// Styles Global
import "@styles/main.scss";

// components
import Loading from "@components/Loading";
import LimitText from "@components/LimitText";
import Pagination from "@components/Pagination";

// ui
import Section from "@ui/Section";
import Div from "@ui/Div";
import Title from "@ui/Title";
import Para from "@ui/Para";
import Ul from "@ui/Ul";
import Li from "@ui/Li";
import SubTitle from "@ui/SubTitle";
import SubsectionTitle from "@ui/SubsectionTitle";

function PostDetail() {
    return (
        <>
            <main className="container">
                <Section className={styles.postDetail}>
                    <Title className={styles.titleDetail}>
                        {post.title} Post Detail
                    </Title>
                    <Para className={styles.paraDetail}>
                        {postMessage.body}
                    </Para>
                </Section>
                <Section className={styles.postComment}></Section>
            </main>
        </>
    );
}
export default PostDetail;
