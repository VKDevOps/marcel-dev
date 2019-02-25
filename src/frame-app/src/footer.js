import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer class="container">
                <div class="row">
                    <div class="col-6 col-md">
                        <h5>Social Media</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Twitter</a></li>
                            <li><a class="text-muted" href="#">Youtube</a></li>
                            <li><a class="text-muted" href="#">Facebook</a></li>
                            <li><a class="text-muted" href="#">Instagram</a></li>
                            <li><a class="text-muted" href="#">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;