import {Page, Card, Pagination, Breadcrumbs, Text, Image, Display, Button, Grid} from '@geist-ui/react'
import Github from '@geist-ui/react-icons/github'

const App = () => {
    const MockItem = () => {
        return <Card shadow style={{width: '100%', height: '100%'}}/>
    }

    const MockItem2 = () => {
        return <Card shadow style={{radius:0,width: '100%', height: '100%'}}/>
    }
    return (
        <Grid.Container gap={1} justify="center">
            {/* 顶部 */}
            <Grid xs={24} style={{width: '100%', height: '65px',marginTop: '0px',marginBottom: '20px'}}><MockItem /></Grid>
            <Grid xs={15} style={{width: '100%', height: '2000px'}}>
                <Grid.Container gap={1} justify="center">
                    {/* 中心内容区域 */}
                    <Grid xs={16} style={{width: '100%'}}>
                        <Grid.Container  justify="center" alignContent="flex-start" >
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}>
                                <Breadcrumbs>
                                    <Breadcrumbs.Item><Github /></Breadcrumbs.Item>
                                    <Breadcrumbs.Item href=""><Github /> Inbox</Breadcrumbs.Item>
                                    <Breadcrumbs.Item ><Github />Tag</Breadcrumbs.Item>
                                    <Breadcrumbs.Item ><Github />Tag</Breadcrumbs.Item>
                                    <Breadcrumbs.Item ><Github />Tag</Breadcrumbs.Item>
                                    <Breadcrumbs.Item ><Github />Tag</Breadcrumbs.Item>
                                    <Breadcrumbs.Item ><Github />Tag</Breadcrumbs.Item>
                                    <Breadcrumbs.Item ><Github />Tag</Breadcrumbs.Item>
                                    <Breadcrumbs.Item ><Github />Tag</Breadcrumbs.Item>
                                    <Breadcrumbs.Item ><Github />Tag</Breadcrumbs.Item>
                                    <Breadcrumbs.Item ><Github />Tag</Breadcrumbs.Item>
                                </Breadcrumbs>
                            </Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                            <Grid xs={23} style={{width: '100%', height: '70px', marginBottom: '3px'}}><MockItem /></Grid>
                        </Grid.Container>
                    </Grid>
                    {/* 左侧 */}
                    <Grid xs={5} style={{width: '100%', height: '1978px',marginTop:'0px'}}><MockItem /></Grid>
                </Grid.Container>
            </Grid>
            {/* 底部 */}
            <Grid xs={24} style={{width: '100%', height: '170px',marginTop:'0px',marginBottom:'0px'}}><MockItem /></Grid>
        </Grid.Container>
    )
}

export default App
