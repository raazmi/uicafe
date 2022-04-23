export default function Home() {
    return (
        <div className="container mx-auto">
            <p className="lead">
                The purpose of this HTML is to help determine what default
                settings are with CSS and to make sure that all possible HTML
                Elements are included in this HTML so as to not miss any
                possible Elements when designing a site.
            </p>
            <hr />
            <h1>Heading 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem iusto repellat libero cupiditate fugiat corrupti inventore illum neque, labore debitis necessitatibus consectetur maxime voluptas ducimus perferendis! Eveniet, iusto consequatur.</h1>
            <h2>Heading 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas totam recusandae, in minus earum adipisci voluptates illo molestias. Ea sit exercitationem corrupti ipsa sunt neque nulla iusto vero totam ex?</h2>
            <h3>Heading 3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, dignissimos cum, cumque neque dolor reiciendis fuga, odio itaque ullam alias quaerat maxime ducimus quia eveniet corporis. Autem id enim repudiandae!</h3>
            <h4>Heading 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam blanditiis amet alias magnam excepturi quasi eum ducimus aut, voluptates facilis tenetur sed sequi velit explicabo distinctio. Soluta, facere! Dicta.</h4>
            <h5>Heading 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima consequuntur maiores quis quae molestiae quibusdam aliquam quaerat in placeat minus natus, voluptatum perspiciatis molestias ab consequatur perferendis maxime. Alias!</h5>
            <h6>Heading 6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum vero sed harum! Excepturi quibusdam ipsum, eveniet iusto numquam nisi quas. Quisquam laudantium est nobis ducimus inventore in soluta perspiciatis!</h6>
            <hr />
            <h2 id="paragraph">Paragraph</h2>
            <p>
                Lorem ipsum dolor sit amet,{" "}
                <a href="#" title="test link">
                    test link
                </a>{" "}
                adipiscing elit. Nullam dignissim convallis est. Quisque
                aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet
                sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida
                vehicula, nisl. Praesent mattis, massa quis luctus fermentum,
                turpis mi volutpat justo, eu volutpat enim diam eget metus.
                Maecenas ornare tortor. Donec sed tellus eget sapien fringilla
                nonummy. Mauris a ante. Suspendisse quam sem, consequat at,
                commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis
                tellus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, <em>emphasis</em> consectetuer
                adipiscing elit. Nullam dignissim convallis est. Quisque
                aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet
                sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida
                vehicula, nisl. Praesent mattis, massa quis luctus fermentum,
                turpis mi volutpat justo, eu volutpat enim diam eget metus.
                Maecenas ornare tortor. Donec sed tellus eget sapien fringilla
                nonummy. Mauris a ante. Suspendisse quam sem, consequat at,
                commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis
                tellus.
            </p>
            <hr />
            <h2 id="list_types">List Types</h2>
            <h3>Definition List</h3>
            <dl>
                <dt>Definition List Title</dt>
                <dd>This is a definition list division.</dd>
            </dl>
            <h3>Ordered List</h3>
            <ol>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>
                    List Item 3
                    <ol>
                        <li>List Item 1</li>
                        <li>List Item 2</li>
                        <li>List Item 3</li>
                    </ol>
                </li>
            </ol>
            <h3>Unordered List</h3>
            <ul>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>
                    List Item 3
                    <ul>
                        <li>List Item 1</li>
                        <li>List Item 2</li>
                        <li>List Item 3</li>
                    </ul>
                </li>
            </ul>
            <hr />
            <h2 id="form_elements">Forms</h2>
            <fieldset>
                <legend>Legend</legend>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Nullam dignissim convallis est. Quisque aliquam. Donec
                    faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.
                    Aliquam libero nisi, imperdiet at, tincidunt nec, gravida
                    vehicula, nisl. Praesent mattis, massa quis luctus
                    fermentum, turpis mi volutpat justo, eu volutpat enim diam
                    eget metus.
                </p>
                <form>
                    <h2>Form Element</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Nullam dignissim convallis est. Quisque aliquam.
                        Donec faucibus. Nunc iaculis suscipit dui.
                    </p>
                    <p>
                        <label htmlFor="text_field">Text Field:</label>
                        <br />
                        <input type="text" id="text_field" placeholder="hello dear" />
                    </p>
                    <p>
                        <label htmlFor="text_area">Text Area:</label>
                        <br />
                        <textarea id="text_area"></textarea>
                    </p>
                    <p>
                        <label htmlFor="select_element">Select Element:</label>
                        <br />
                        <select name="select_element">
                            <optgroup label="Option Group 1">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </optgroup>
                            <optgroup label="Option Group 2">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </optgroup>
                        </select>
                    </p>
                    <p>
                        <input type="radio" id="html" name="fav_fruit" value="Orange"/>
                        <label htmlFor="html">Orange</label>
                    </p>
                    <p>
                    <input type="radio" id="css" name="fav_fruit" value="Mango"/>
                        <label htmlFor="css">Mango</label>
                    </p>
                    <p>
                        <input type="radio" id="javascript" name="fav_fruit" value="Pawpaw"/>
                        <label htmlFor="javascript">Pawpaw</label>
                    </p>
                    <p>
                    </p>
                    <p>
                        <input
                            type="checkbox"
                            className="checkbox"
                            name="checkboxes"
                            value="check_1"
                            id="checkbox1"
                        />
                        <label htmlFor="checkbox1">Checkbox</label>
                    </p>
                    <p>
                        <input
                            type="checkbox"
                            className="checkbox"
                            name="checkboxes"
                            value="check_1"
                            id="checkbox2"
                        />
                        <label htmlFor="checkbox2">Checkbox</label>
                    </p>
                    <p>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            className="password"
                            name="password"
                        />
                    </p>
                    <p>
                        <label htmlFor="file">File Input:</label>
                        <input type="file" className="file" name="file" id="file" />
                    </p>
                    <p>
                        <input className="button" type="reset" value="Clear" />
                    </p>
                    <p>
                        <input className="button" type="submit" value="Submit" />
                    </p>
                  
                </form>
            </fieldset>
            <hr />
            <h2 id="tables">Tables</h2>
            <table className="table-auto border">
                <thead>
                    <tr>
                        <th>Table Header 1</th>
                        <th>Table Header 2</th>
                        <th>Table Header 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Division 1</td>
                        <td>Division 2</td>
                        <td>Division 3</td>
                    </tr>
                    <tr className="even">
                        <td>Division 1</td>
                        <td>Division 2</td>
                        <td>Division 3</td>
                    </tr>
                    <tr>
                        <td>Division 1</td>
                        <td>Division 2</td>
                        <td>Division 3</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <h2 id="misc">
                Misc Stuff &#8211; abbr, acronym, pre, code, sub, sup, etc.
            </h2>
            <p>
                Lorem <sup>superscript</sup> dolor <sub>subscript</sub> amet,
                consectetuer adipiscing elit. Nullam dignissim convallis est.
                Quisque aliquam. <cite>cite</cite>. Nunc iaculis suscipit dui.
                Nam sit amet sem. Aliquam libero nisi,{" "}
                <code>npm install -g yarn</code> imperdiet at, tincidunt nec,
                gravida vehicula, nisl. Praesent mattis, massa quis luctus
                fermentum, turpis mi volutpat justo, eu volutpat enim diam eget
                metus. Maecenas ornare tortor. Donec sed tellus eget sapien
                fringilla nonummy.{" "}
                <acronym title="National Basketball Association">NBA</acronym>{" "}
                Mauris a ante. Suspendisse quam sem, consequat at, commodo
                vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.{" "}
                <abbr title="Avenue">AVE</abbr>
            </p>
            <pre>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
                dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc
                iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi,
                imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent
                mattis, massa quis luctus fermentum, turpis mi volutpat justo,
                eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec
                sed tellus eget sapien fringilla nonummy.
                <acronym title="National Basketball Association">NBA</acronym>
                Mauris a ante. Suspendisse quam sem, consequat at, commodo
                vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.
                <abbr title="Avenue">AVE</abbr>
            </pre>
            <blockquote>
                <p>
                    &#8220;This stylesheet is going to help so freaking
                    much.&#8221; <br />
                    -Blockquote
                </p>
            </blockquote>
        </div>
    );
}
