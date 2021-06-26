import React from 'react'
import Button from '../../components/Button'
import Type from '../../components/Type'
import Resources from '../../components/Resources'
import ReadingsIcon from '../../assets/img/icons/readings.svg'
import ResourcesIcon from '../../assets/img/icons/resources.svg'
import '../Lesson/lesson.css'
const Lesson = () => {
    return (
        <div class="lesson">
            <div className="lesson__video">
                <iframe width="90%" height="80%" src="https://www.youtube.com/embed/WnN6dbos5u8" title="Lesson Video" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen>
                    Failed to load the lesson
                </iframe>
            </div>
            <div className="lesson__materials">
                <div className="lesson__readings">
                    <Type type ="Readings" icon={ReadingsIcon} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, inventore repellat, quidem itaque quisquam porro consequuntur quibusdam explicabo non numquam sequi animi! Tempore sunt, temporibus commodi odio repudiandae maiores necessitatibus.
                    Veniam eveniet sint cupiditate eos in dolores nesciunt voluptas quisquam asperiores sunt minus, inventore tempore quos laboriosam repellendus, harum illo quae nobis nisi corporis. Rerum quas provident doloribus corporis animi.
                    Consequatur aspernatur aut debitis ad ipsa delectus deleniti magni quia repellat? Sapiente ea veniam beatae reprehenderit, molestias necessitatibus cumque facilis unde numquam? Eos repudiandae, ab neque architecto hic odit voluptatem?
                    Debitis, eligendi repudiandae. Eligendi obcaecati dolore accusantium blanditiis repudiandae eum culpa odio assumenda quos dicta. Possimus ullam quia dolorum, qui, provident, ratione nemo fugit incidunt omnis sunt molestias magni eligendi.
                    Praesentium, consectetur quae ad eligendi neque voluptatibus velit in aspernatur temporibus error culpa illum tempora a explicabo tenetur quo consequuntur ducimus accusamus placeat eos iste sunt? Eos deserunt odio laborum.</p>
                </div>
                <div className="lesson__resources">
                    <Type type ="Resources" icon={ResourcesIcon} />
                    <Resources resources={[
                        {
                            "title" : "Install for Windows",
                            "url" : "#"
                        },
                        {
                            "title" : "Install for Mac",
                            "url" : "#"
                        },
                        {
                            "title" : "Install for Android",
                            "url" : "#"
                        }
                    ]} />
                </div>
            </div>
            <div className="lesson__nav">
                
                <Button type="outlined" text="Back" />
                <span>1/7</span>
                <Button type="filled" text="Next" />
                <span>action</span>
            </div>
        </div>
    )
}

export default Lesson
