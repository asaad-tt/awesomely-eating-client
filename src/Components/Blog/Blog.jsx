import React from "react";
import img1 from "../../asset/blog/SQL-Vs-NoSQL1.png";
import img2 from "../../asset/blog/jwt.jpeg";
import img3 from "../../asset/blog/nodejsvsjavascript.jpg";
import img4 from "../../asset/blog/node.png";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");

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
              1. Client login with username and password <br />
              2. Server creates a token for the client <br />
              3. server sends a token to the client <br />
              4. Client stores the token on either local storage or browser
              cookie <br />
              5. Next time the client makes a request, a copy of the token is
              send to the server for authorization. <br />
              6. Server verifies the JWT signature before giving the
              authorization. <br />
              7. Server responds to the client's request. <br />
              basically this way JWT works
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
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node.js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language.we can all java script run time.
              It requires libraries that can be conveniently accessed from
              JavaScript programming to be more helpful. <br />
              Any engine may run JavaScript. As a result, writing JavaScript is
              incredibly easy, and any working environment is similar to a
              complete browser. Node.js, on the other hand, only enables the V8
              engine. Written JavaScript code, on the other hand, can run in any
              context, regardless of whether the V8 engine is supported.
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
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. <br />
              If NodeJS can process the request without I/O blocking then the
              event loop would itself process the request and sends the response
              back to the client by itself. But, it is possible to process
              multiple requests parallelly using the NodeJS cluster module or
              worker_threads module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
