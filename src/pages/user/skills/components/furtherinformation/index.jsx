import { Card, Checkbox, Col, Form, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useTranslation } from "react-i18next";
import { Buttons, Inputs } from "../../../../../../src/components";
import { CloudUploadOutlined } from "@ant-design/icons";
import InputUpload from "./inputUpload";

const title = "اطلاعات تکمیلی من";

const FurtherInfo = () => {
    const { t } = useTranslation();
    return (
        <>
            <Card
                bordered >
                <Meta className="pt-7 pb-2"
                    title={title}
                />
                <Form name="further-form" className="further-form mt-5 fs-sx" layout="vertical">
                    <Row gutter={[8, 8]} align={"middle"} className="mt-7 pb-1">
                        <Col xs={24} md={16} lg={12}>
                            <label>آیا سابقه حضور در کارگاه های آموزشی و مستر کلاس ها را دارید؟</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"} className="pb-1">    
                        <Col xs={22} md={10} lg={8}>
                        <Checkbox.Group style={{ width: '100%' }} defaultValue={"B"} >
                                <Row>
                                    <Checkbox value="A" disabled>ندارم</Checkbox>
                                    <Checkbox value="B">دارم</Checkbox>
                                </Row>
                            </Checkbox.Group>
                            </Col>
                        <Col xs={24} md={10} lg={8} className="pt-4">
                            <Inputs
                                name="peresent"
                                defaultValue="کارگاه تئوری موسیقی ارشد طهماسبی"
                            />
                        </Col>
                        <Col xs={18} md={6} lg={8}>
                            <InputUpload />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"} className="mt-4 pb-1">
                        <Col xs={24} md={16} lg={12}>
                            <label>آیا سابقه ی اجرای صحنه ای داشته اید؟</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"} className="pb-1">    
                        <Col xs={22} md={10} lg={8}>
                        <Checkbox.Group style={{ width: '100%' }} defaultValue={"B"} >
                                <Row>
                                    <Checkbox value="A" disabled>ندارم</Checkbox>
                                    <Checkbox value="B">دارم</Checkbox>
                                </Row>
                            </Checkbox.Group>
                            </Col>
                        <Col xs={24} md={10} lg={8} className="pt-4">
                            <Inputs
                                name="executive"
                                defaultValue="ارسباران"
                            />
                        </Col>
                        <Col xs={18} md={6} lg={8}>
                            <InputUpload />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"} className="mt-4 pb-1">
                        <Col xs={24} md={16} lg={12}>
                            <label>آیا سابقه ی ضبط استودیویی دارید؟</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"} className="pb-1">    
                        <Col xs={22} md={10} lg={8}>
                        <Checkbox.Group style={{ width: '100%' }} defaultValue={"A"} >
                                <Row>
                                    <Checkbox value="A">ندارم</Checkbox>
                                    <Checkbox value="B" disabled>دارم</Checkbox>
                                </Row>
                            </Checkbox.Group>
                            </Col>
                        <Col xs={24} md={10} lg={8} className="pt-4">
                            <Inputs
                                name="record"
                                placeholder={t("ارسباران")}
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"} className="mt-4 pb-1">
                        <Col xs={24} md={16} lg={12}>
                            <label>آیا سابقه ی حضور در آلبوم موسیقی داشته اید؟</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"} className="pb-1">    
                        <Col xs={22} md={10} lg={8}>
                        <Checkbox.Group style={{ width: '100%' }} defaultValue={"B"} >
                                <Row>
                                    <Checkbox value="A" disabled>ندارم</Checkbox>
                                    <Checkbox value="B">دارم</Checkbox>
                                </Row>
                            </Checkbox.Group>
                            </Col>
                        <Col xs={24} md={10} lg={8} className="pt-4">
                            <Inputs
                                name="album"
                                defaultValue="خواب های طلایی"
                            />
                        </Col>
                        <Col xs={18} md={6} lg={8}>
                           <InputUpload />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"} className="mt-4 pb-1">
                        <Col xs={24} md={16} lg={12}>
                            <label>آیا سابقه ی حضور در جشنواره ی موسیقی داشته اید؟</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"} className="pb-1">    
                        <Col xs={22} md={10} lg={8}>
                        <Checkbox.Group style={{ width: '100%' }} defaultValue={"B"} >
                                <Row>
                                    <Checkbox value="A" disabled>ندارم</Checkbox>
                                    <Checkbox value="B">دارم</Checkbox>
                                </Row>
                            </Checkbox.Group>
                            </Col>
                        <Col xs={24} md={10} lg={8} className="pt-4">
                            <Inputs
                                name="festival"
                                defaultValue="ارسباران"
                            />
                        </Col>
                        <Col xs={18} md={6} lg={8}>
                            <InputUpload />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"} className="mt-4 pb-1">
                        <Col xs={24} md={16} lg={12}>
                            <label>آیا سابقه ی همکاری با گروه های موسیقی داشته اید؟</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"} className="pb-1">    
                        <Col xs={22} md={10} lg={8}>
                        <Checkbox.Group style={{ width: '100%' }} defaultValue={"B"} >
                                <Row>
                                    <Checkbox value="A" disabled>ندارم</Checkbox>
                                    <Checkbox value="B">دارم</Checkbox>
                                </Row>
                            </Checkbox.Group>
                            </Col>
                        <Col xs={24} md={10} lg={8} className="pt-4">
                            <Inputs
                                name="coomusic"
                                defaultValue="ارسباران"
                            />
                        </Col>
                        <Col xs={18} md={6} lg={8}>
                            <InputUpload />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"} className="mt-4 pb-1">
                        <Col xs={24} md={16} lg={12}>
                            <label>آیا سابقه ی همکاری با رسانه ی ملی داشته اید؟</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"} className="pb-1">    
                        <Col xs={22} md={10} lg={8}>
                        <Checkbox.Group style={{ width: '100%' }} defaultValue={"B"} >
                                <Row>
                                    <Checkbox value="A" disabled>ندارم</Checkbox>
                                    <Checkbox value="B">دارم</Checkbox>
                                </Row>
                            </Checkbox.Group>
                            </Col>
                        <Col xs={24} md={10} lg={8} className="pt-4">
                            <Inputs
                                name="coomedia"
                                defaultValue="شبکه 5"
                            />
                        </Col>
                        <Col xs={18} md={6} lg={8}>
                            <InputUpload />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"} className="mt-4 pb-1">
                        <Col xs={24} md={16} lg={12}>
                            <label>آیا سابقه ی تدریس در آموزشگاه ها را داشته اید؟</label>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} align={"middle"} className="pb-4">    
                        <Col xs={22} md={10} lg={8}>
                        <Checkbox.Group style={{ width: '100%' }} defaultValue={"B"} >
                                <Row>
                                    <Checkbox value="A" disabled>ندارم</Checkbox>
                                    <Checkbox value="B">دارم</Checkbox>
                                </Row>
                            </Checkbox.Group>
                            </Col>
                        <Col xs={24} md={10} lg={8} className="pt-4">
                            <Inputs
                                name="teaching"
                                defaultValue="آموزشگاه فجر"
                            />
                        </Col>
                        <Col xs={18} md={6} lg={8}>
                           <InputUpload />
                        </Col>
                    </Row>
                        </Form>
                    </Card>
                </>
    );
};

export default FurtherInfo;
