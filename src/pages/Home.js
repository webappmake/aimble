import * as React from 'react';
import { Box, Typography, Link, TextField, InputAdornment, MenuItem, Stack, Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import logoSvg from '../img/thinq_app_logo.svg';
import appQrSvg from '../img/qrbg.png';

function Home() {
  return (
		<>
			<div className='language'>
				<TextField
					select
					defaultValue={1}
					size="small"
					sx={{ width: '180px'}}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<LanguageIcon />
							</InputAdornment>
						),
					}}
				>
					<MenuItem value={1}>대한민국 / 한국어</MenuItem>
					<MenuItem value={2}>미국 / English</MenuItem>
				</TextField>
			</div>
			<Box className='main home' component="main">
				<Box className='main-body'>
					<Box className='welcome'>
						<Typography variant="h1" sx={{ flexGrow: 1 }}>
							<img src={logoSvg} alt="LG ThinQ App Logo"/>
							<strong>LG <span className='red'>ThinQ</span></strong>
						</Typography>
						<Typography variant="body1" className='welcome-message'>
							<strong>환영합니다!</strong>
							<small>스마트폰에서 LG ThinQ 앱으로 로그인 하세요.</small>
						</Typography>
						<Stack className='lg-login' spacing={1}>
							<TextField 
								id="standard-basic" 
								variant="outlined"
								placeholder="Please input the e-mail ID."
								size="small"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">ID</InputAdornment>
									),
								}}					
							/>
							<TextField 
								id="standard-basic" 
								variant="outlined"
								placeholder="Please enter the Password."
								size="small"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">PW</InputAdornment>
									),
								}}
							/>
							<Button variant="contained" size="large">로그인</Button>
						</Stack>
						<Link href="/QrLogin" className='btn-login'>
							<span>일회용 번호 또는 QR코드로</span>
							<strong>로그인하기</strong>
						</Link>
					</Box>				
				</Box>
				<Box className='main-footer'>
					<img src={appQrSvg} alt="LG ThinQ App QR Code Sample"/>
					<Typography variant="body2">
						<strong>ThinQ가 처음이라면!</strong>
						<span>스마트폰에서 먼저 LG ThinQ 앱을 설치한 뒤 회원으로 가입해주세요.</span>
					</Typography>
				</Box>
			</Box>
		</>
  );
}
export default Home;