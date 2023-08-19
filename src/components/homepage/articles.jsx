import Article from "./article.jsx";

const Articles = (props) => {
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            {props.myArticles.map((article, index) => (
                <div
                    className="homepage-article"
                    key={(index + 1).toString()}
                >
                    <Article
                        key={(index + 1).toString()}
                        date={article().date}
                        title={article().title}
                        description={article().description}
                        link={"/article/" + (index + 1)}
                    />
                </div>
            ))}
        </div>
    );
};

export default Articles;
