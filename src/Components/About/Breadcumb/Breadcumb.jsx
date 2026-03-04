import "./Breadcumb.css"
export default function Breadcumb() {
    return (
        <section className="bread-crumb">
        <span className="crumb-border"></span>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ul className="breadcrumb">
                        <li className="home">
                            <a href="./index.html"><span>Trang chủ</span></a>
                            <span className="mr_lr">&nbsp;<i className="fa fa-angle-right"></i>&nbsp;</span>
                        </li>
                        <li><strong><span>Giới thiệu</span></strong></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}