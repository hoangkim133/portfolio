import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

const name = "Name: PHAM KIM HOANG".split(" ");
const age = "Age: 23".split(" ");
const from = "From: Vietnam".split(" ");
const background = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.".split(" ");
const other = "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.".split(" ");


const titleVariants = {
    hidden: {
        scaleX:0, originX: 0,
    }, 
    visible: {
        scaleX:1,
        transition: { delay: 0.2, duration: 0.2}
    },
    exit: {
        scaleX:0,
        transition: {duration: 0.5}
    }
}

function Info() {

    const redirectToProjects = (event: React.MouseEvent<HTMLElement>) => {
        let navChild = document.getElementsByClassName('navbar-child');
        let pathname = event.currentTarget.getAttribute('href');

        for (var i = 0; i < navChild.length; i++) {
            let child = navChild[i];
            child.classList.remove('is-active');

            if (child.getAttribute('href') == pathname) {
                child.classList.add('is-active');
            }
        }
    }

    return (
        <>
            <div className="box-fix box-conner full-height d-flex flex-column main-font scroll-off">
                <Container fluid style={{paddingLeft: '0'}}>
                    <Row style={{minHeight:'30vh'}}>
                        <Col sm={12} lg={4} md={4} xl={4} xxl={4} xxs={8}>
                            <motion.div
                             exit={{scaleX:0, originX: 0,
                                transition: {duration: 0.4}}}
                            >
                            <motion.h6 className="secondary-font title"
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            >About me</motion.h6>
                                <p className="text-info-detail">
                                {name.map((el, i) => (
                                    <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i / 10,
                                    }}
                                    key={i}
                                    >
                                    {el}{" "}
                                    </motion.span>
                                ))}
                                <br />
                                {age.map((el, i) => (
                                <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: i / 10,
                                }}
                                key={i}
                                >
                                {el}{" "}
                                </motion.span>
                            ))}
                                <br />
                                {from.map((el, i) => (
                                <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: i / 10,
                                }}
                                key={i}
                                >
                                {el}{" "}
                                </motion.span>
                            ))}
                            </p>
                            </motion.div>                            
                        </Col>
                        <Col sm={12} lg={4} md={4} xl={4} xxl={4} xxs={8}>
                            <motion.div>
                                <motion.h6 
                                variants={titleVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="secondary-font title">Background</motion.h6>

                            <motion.div
                            exit={{scaleX:0, originX: 0,
                                transition: {duration: 0.4}}}
                            >
                            <p className="text-info-detail">
                                {background.map((el, i) => (
                                    <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: i / 30,
                                    }}
                                    key={i}
                                    >
                                    {el}{" "}
                                    </motion.span>
                                ))}
                                </p>
                            </motion.div>
                               
                            </motion.div>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} lg={6} md={6} xl={6} xxl={6}>
                            <motion.h6 
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="secondary-font title">Something elses</motion.h6>
                            <motion.div
                            exit={{scaleX:0, originX: 0,
                                transition: {duration: 0.4}}}
                            >
                                <p className="text-info-detail"> 
                            {other.map((el, i) => (
                                    <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: i / 30,
                                    }}
                                    key={i}
                                   
                                    >
                                    {el}{" "}
                                    </motion.span>
                                ))}
                            <br /></p>
                            <motion.p
                            initial={{scaleX:0,  originX: 0}}
                            animate={{scaleX:1,transition: {delay:1.5, duration: 0.4}}}
                            >
                                <i>
                                    <Link to="/projects" style={{fontSize: '15px', color: '#6e6d6d'}} onClick={redirectToProjects}>
                                        <span>&#8640;</span>
                                        <span> See my experience </span>                      
                                    </Link>
                                </i>
                            </motion.p>
                            </motion.div>
                            
                            <motion.h3 
                             exit={{opacity:0,
                                transition: {duration: 0.4}}}
                            className="main-color-text main-font"> 
                                <i>
                                    <ReactTyped
                                    strings={["“Nothing haunts us like the things we don't say!”", "“No pain no gain !!!”"]}
                                    startDelay={1500}
                                    backDelay={4000}
                                    typeSpeed={50}
                                    smartBackspace={false}
                                    loop
                                    backSpeed={20}
                                    showCursor={true}
                                    />
                                </i>
                            </motion.h3>
                        </Col>
                        <Col sm={12} lg={6} md={6} xl={6} xxl={6} xxs={12} xs={12}>
                            <motion.img 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.4,
                            }}
                            exit={{scale:0,
                                transition: {duration: 0.4}}}
                            src="./coimg.jpg" alt="my-desk" className="img-info-child"/>
                        </Col>
                    </Row>
                </Container>    
            </div>
            <motion.div 
            initial={{x:'100vh'}}
            animate={{x:0}}
            transition={{duration: 0.4}}
            exit={{x:'100vh',
                transition: {duration: 0.5}}}
            className="img-info"></motion.div>            
        </>

        
    )
}

export default Info