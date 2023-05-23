import React from 'react';
import { Helmet } from 'react-helmet';

const Blogs = () => {
    return (
        <div className='md:w-9/12 md:mx-auto mx-10 my-16'>
            <Helmet>
                <title>Blogs | ToyLand</title>
            </Helmet>
            <h1 className='text-center text-3xl border-b pb-10'>Question Answer Blog on Backend Development</h1>
            <div className='my-10 space-y-3'>
                <h2 className='text-2xl font-bold'>1) What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>

                <div><span className='text-lg font-bold text-slate-700'>Answer: </span>
                    <span className='text-slate-600 text-lg'>An access token and refresh token are commonly used in authentication and authorization systems. Here's an overview of what they are, how they work, and where to store them on the client-side:</span><br />

                    <span className='text-lg font-bold text-slate-700'>Access Token: </span>
                    <span className='text-slate-600 text-lg'>An access token is a credential that grants a client (such as a web or mobile app) access to protected resources on a server. It acts as proof of authentication and is usually short-lived. Access tokens typically contain information like user identity and permissions.</span><br /><br />

                    <span className='text-lg font-bold text-slate-700'>Refresh Token: </span>
                    <span className='text-slate-600 text-lg'>A refresh token is a long-lived credential that is used to obtain a new access token when the current access token expires. It provides a way for the client to request a new access token without requiring the user to log in again. Refresh tokens are securely stored and are often associated with a specific user session.</span><br /><br />

                    <span className='text-lg font-bold text-slate-700'>where should we store them on the client-side: </span>
                    <span className='text-slate-600 text-lg'>
                        <p className='list-item'>
                            <span>
                                <span className='text-lg font-bold text-slate-700'>Access tokens:</span> Store access tokens in memory or in a secure token storage mechanism such as browser cookies with the httpOnly and Secure flags enabled, or in the browser's localStorage or sessionStorage. Use caution when storing tokens in local storage as they may be vulnerable to cross-site scripting (XSS) attacks.
                            </span><br />

                            <span>
                                <span className='text-lg font-bold text-slate-700'>Refresh Tokens:</span> Refresh tokens: Store refresh tokens securely using mechanisms such as secure HTTP-only cookies, in-memory storage, or browser's localStorage with encryption. Refresh tokens should not be accessible to JavaScript code or vulnerable to XSS attacks.
                            </span>

                        </p>
                    </span>
                </div>
            </div>


            {/* question 2 */}
            <div className='my-10 space-y-3'>
                <h2 className='text-2xl font-bold'>2) Compare SQL and NoSQL databases?</h2>
                <p className='text-lg font-bold text-slate-700'>Answer: Difference between SQL and NoSQL Database-</p>
                <div className='grid md:grid-cols-2 gap-5 md:gap-0 rounded-lg border'>
                    <div className='border-r'>
                        <h1 className='bg-blue-50 border-b text-xl text-center py-2'>SQL</h1>
                        <p className='p-5 text-lg'>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases have fixed or static or predefined schema. These databases are not suited for hierarchical data storage. These databases are best suited for complex queries. Vertically Scalable. Follows ACID property. Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server, etc</p>
                    </div>

                    <div className='border-l'>
                        <h1 className='bg-blue-50 border-b text-xl text-center py-2'>NoSQL</h1>
                        <p className='p-5 text-lg'>Non-relational or distributed database system. They have a dynamic schema. These databases are best suited for hierarchical data storage. These databases are not so good for complex queries. Horizontally scalable. Follows CAP(consistency, availability, partition tolerance). Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc</p>
                    </div>
                </div>
            </div>

            {/* question 3 */}
            <div className='my-10 space-y-3'>
                <h2 className='text-2xl font-bold'>3) What is express js? What is Nest JS?</h2>
                <p className='text-lg font-bold text-slate-700'>Answer: Difference between express js and Nest js-</p>

                <div className='grid md:grid-cols-2 gap-5 md:gap-0 rounded-lg border'>
                    <div className='border-r'>
                        <h1 className='bg-blue-50 border-b text-xl text-center py-2'>Express.js</h1>
                        <p className='p-5 text-lg'>Express.js is a minimal and flexible web framework for Node.js. It provides a simple and lightweight approach to building web applications and APIs. With Express.js, you have more control over the structure and components of your application, allowing you to customize and extend it according to your needs. It offers a wide range of middleware and plugins to handle common tasks such as routing, request/response handling, session management, and authentication. Express.js is known for its simplicity, speed, and extensive community support. It is suitable for building small to medium-sized web applications and APIs.</p>
                    </div>

                    <div className='border-l'>
                        <h1 className='bg-blue-50 border-b text-xl text-center py-2'>Nest.js</h1>
                        <p className='p-5 text-lg'>Nest.js is a powerful and scalable framework for building server-side applications in Node.js. It is built on top of Express.js but adds additional features and architectural patterns inspired by Angular, making it a full-featured framework for enterprise-level applications. Nest.js promotes the use of decorators, dependency injection, and modules to create highly modular and maintainable code. It provides out-of-the-box support for features like routing, middleware, validation, dependency injection, and testing. Nest.js follows a structured and opinionated approach to development, making it well-suited for building large-scale applications with a focus on scalability and maintainability. It also integrates well with TypeScript, providing strong typing and compile-time checks.</p>
                    </div>
                </div>
            </div>

            {/* question 4 */}
            <div className='my-10 space-y-3'>
                <h2 className='text-2xl font-bold'>4) What is MongoDB aggregate and how does it work?</h2>
                <p className='text-lg font-bold text-slate-700'>Answer: </p>

                <p className='text-lg'>
                    In MongoDB, the aggregate function is used to perform advanced data analysis and aggregation operations on collections of documents. It allows you to perform complex calculations, transformations, and grouping operations to obtain meaningful insights from your data.<br /><br />

                    The aggregate function in MongoDB works by processing a sequence of stages that define the data transformation pipeline. Each stage performs a specific operation on the input documents and passes the results to the next stage. The output of one stage becomes the input for the next stage in the pipeline.
                </p>
            </div>

        </div>
    );
};

export default Blogs;