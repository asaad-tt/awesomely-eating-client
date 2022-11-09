import React from "react";
import img1 from "../../asset/blog/SQL-Vs-NoSQL1.png";
import img2 from "../../asset/blog/jwt.jpeg";
import img3 from "../../asset/blog/nodejsvsjavascript.jpg";
import img4 from "../../asset/blog/node.png";

const Blog = () => {
  return (
    <div className="from-amber-900">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img1}
            alt="sql"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Difference between SQL and NoSQL ?
            </h1>
            <p className="py-6">
              SQL: <br />
              1. SQL databases are primarily called RDBMS or Relational
              Databases <br />
              2. Structured query language (SQL) <br />
              3. SQL databases are table based databases <br />
              4. SQL databases have a predefined schema <br />
              5. Oracle, Postgres, MySQL, and MS-SQL <br />
              NoSQL: <br />
              1. NoSQL databases are primarily called as Non-relational or
              distributed database <br />
              2. No declarative query language <br />
              3. NOSQL databases can be document based, key-value pairs, graph
              databases <br />
              4. NOSQL databases use dynamic schema for unstructured data.{" "}
              <br />
              5. MongoDB, Redis, Neo4j, Cassandra, Hbase
            </p>
          </div>
        </div>
      </div>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img2}
            alt="sql"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              What is JWT, and how does it work? ?
            </h1>
            <p className="py-6">
              JWT: <br />
              JWT means Json web token . It securely transmits information
              between two parties .Jwt is used only for authorization purpose
              not authentication. <br />
              JWT works can describe in few step <br />
              1.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img3}
            alt="sql"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              What is the difference between javascript and NodeJS?
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img4}
            alt="sql"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              How does NodeJS handle multiple requests at the same time?
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
