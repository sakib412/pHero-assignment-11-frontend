import React from 'react'

const Blogs = () => {
    return (
        <div className='py-5'>
            <h1 className='text-center'>Our Blogs</h1>
            <section className='blogs'>
                <article className='blog'>
                    <h2>Difference between "Javascript" and "NodeJS"</h2>
                    <p className='h5'>
                        <ul>
                            <li>

                                Javascript is a popular programming language and it runs in any web browser with a good web browser.
                                <br />
                                On the other hand, Node.js is an interpreter and environment for the JavaScript with some specific useful libraries which JS programming can be used separately.
                            </li>
                            <li>
                                JavaScript may run on any engine, including Safari's JavaScript Core, FireFox's Spider Monkey, and V8's V8 (Google Chrome)
                                <br />

                                Only the V8 engine, which is mostly used by Google Chrome, supports Node.js. Furthermore, any JS program developed with the Node.js library will always execute in the V8 Engine.
                            </li>
                            <li>
                                JavaScript is mainly used for the client-side activity for one particular web application. Some of these activities can be dynamic page display in some schedule time interval, addressing business validation or basic Ajax call kind of task.
                                <br />
                                These are used most of the time for any web apps. On the other hand, Node.js is mainly used for running or accessing any operating system for the non-blocking operation.
                            </li>

                        </ul>

                    </p>
                </article>
                <article className='blog'>
                    <h2>Differences between SQL and NoSQL databases.</h2>
                    <p className='h5'>
                        <ul>
                            <li>
                                SQL is relational.
                                Non-SQL is non relational.
                            </li>
                            <li>
                                SQL databases support Structured Query Languages.
                                NonSQL does not have any declarative query language.

                            </li>
                            <li>
                                A language used to communicate with databases for storage, deletion, updation, insertion and retrieval of data.
                                A software to retrieve, store and manage scalability of databases

                            </li>
                            <li>
                                SQL supports predefined schemas, making the storage of data restrictive to structured type only.
                                Nosql supports dynamic schemas to store different forms of data.

                            </li>
                            <li>
                                SQL supports databases like MySQL, SQL Server, Oracle, etc.
                                Nosql databases are Hbase, MongoDB, Redis, etc.

                            </li>
                        </ul>
                    </p>
                </article>
                <article className='blog'>
                    <h2>What is the purpose of jwt and how does it work?</h2>
                    <p className='h5'>
                        <ul>
                            <li>

                                JWT is distinct from other web tokens in that it includes a set of claims. Claims are a type of communication between two parties. The nature of these claims is determined by the use case at hand. A claim could specify who issued the token, how long it is valid, or what permissions the client has been given.
                            </li>
                            <li>

                                A JWT is a three-part string separated by dots (.) that is serialized using base64. The JWT looks like this in the most common serialization format, compact serialization: aaaa.bbbbb.cccccc.
                            </li>
                        </ul>
                    </p>
                </article>
            </section>
        </div>
    )
}

export default Blogs