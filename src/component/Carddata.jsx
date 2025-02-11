import { MessageSquareDot, Plus } from "lucide-react";
import Card from "./common/Card";

const Carddata = () => {
    return (
        <div className="container mx-auto py-8">
            <center className="mb-5"><b>

                Poll/Survey
            </b>
                <h1>Participate in polls/surveys and make your opinion count on national importance.</h1>
            </center>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card
                    image="/Img/img1.jpeg"
                    title="Card Title 1"
                    content="This is the content of card 1.  It's a great card!"
                    buttonText="Make your opinion count"
                />
                <Card
                    image="/Img/img2.jpeg"
                    title="Card Title 2"
                    content="This is the content of card 2.  Another fantastic card!"
                    buttonText="Make your opinion count"
                />
                <Card
                    image="/Img/img3.jpeg"
                    title="Card Title 3"
                    content="This is the content of card 3.  A truly amazing card!"
                    buttonText="Make your opinion count"
                />
                <div className="ml-20 mt-16">
                    <div className="">
                        <Plus size={40} />
                    </div>
                    <div>
                        <MessageSquareDot size={40} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carddata;
