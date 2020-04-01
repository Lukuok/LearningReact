import React from 'react';
import Aside from '../aside/Aside'
import ListCard from '../parts/ListCard';
import ServiceCard from '../parts/ServiceCard';

function Home() {
    return (
    <div>
        <Aside/>
        <div id="fh5co-main">
        <div class="fh5co-narrow-content">
            <h2 class="fh5co-heading animate-box" data-animate-effect="fadeInLeft">Recent Blog</h2>
            <div class="row row-bottom-padded-md">
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
            </div>
        </div>

        <div class="fh5co-narrow-content">
            <h2 class="fh5co-heading animate-box" data-animate-effect="fadeInLeft">Services</h2>
            <div class="row">
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
            </div>
        </div>

        <div id="get-in-touch">
            <div class="fh5co-narrow-content">
                <div class="row">
                    <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                        <h1 class="fh5co-heading-colored">Get in touch</h1>
                    </div>
                </div>
                <div class="row">
                    <div
                        class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                        data-animate-effect="fadeInLeft">
                        <p class="fh5co-lead">Separated they live in Bookmarksgrove right at the coast
                            of the Semantics, a large language ocean.</p>
                        <p>
                            <a href="#" class="btn btn-primary">Learn More</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    );
}

export default Home;