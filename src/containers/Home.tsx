import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import grey from '@mui/material/colors/grey';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {

  function buildSkill(skill: string, conf: number) {
    return (
      <Stack
        direction='row'
        alignItems='center'
      >
        <Box
          sx={{
            width: '50%',
          }}
        >
          <Typography
            variant='subtitle1'
          >
            {skill}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '50%',
          }}
        >
          <LinearProgress
            variant='determinate'
            value={conf}
            sx={{
              height: '8px',
              borderRadius: '16px',
            }}
          />
        </Box>
      </Stack>
    );
  }

  return (
    <Box
      sx={{
        height: '100%',
        bgcolor: 'background.default',
      }}
    >
      <Box
        sx={{
          height: '200px',
          bgcolor: grey[200],
        }}
      >
        <Container
          maxWidth='md'
        >
          <Typography
            variant='h3'
            color='textPrimary'
            textAlign='center'
            sx={{
              paddingTop: '54px',
            }}
          >
            Chia Yong Sheng
          </Typography>
          <Typography
            variant='h6'
            color='textPrimary'
            textAlign='center'
          >
            a full stack engineer
          </Typography>
        </Container>
      </Box>
      <Box
        sx={{
          bgcolor: grey[100],
          padding: '8px 0',
        }}
      >
        <Container
          maxWidth='md'
        >
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='center'
            spacing={2}
          >
            <Stack
              direction='row'
              alignItems='center'
              spacing={0.5}
            >
              <PhoneIcon />
              <Typography
                variant='subtitle1'
                color='textPrimary'
              >
                {process.env['REACT_APP_PHONE']}
              </Typography>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              spacing={0.5}
            >
              <EmailIcon />
              <Typography
                variant='subtitle1'
                color='textPrimary'
              >
                {process.env['REACT_APP_EMAIL']}
              </Typography>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              spacing={0.5}
            >
              <LinkedInIcon />
              <Typography
                variant='subtitle1'
                color='textPrimary'
              >
                {process.env['REACT_APP_LINKEDIN']}
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container
        maxWidth='md'
        sx={{
          bgcolor: 'white',
        }}
      >
        <Stack
          direction='row'
          sx={{
            padding: '24px 24px 48px 24px',
          }}
        >
          <Box
            sx={{
              width: 'calc(100% / 3 * 2)',
              paddingRight: '32px',
            }}
          >
            <Typography
              variant='h5'
              fontWeight='bold'
              sx={{
                paddingBottom: '8px',
              }}
            >
              Experience
            </Typography>
            <Typography
              fontWeight='bold'
            >
              Littlefires.io. Pte. Ltd.
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{
                fontStyle: 'italic',
              }}
            >
              Aug 2022 - Present
            </Typography>
            <Card
              elevation={0}
            >
              <CardContent
                sx={{
                  padding: '8px 0px',
                  paddingBottom: '0 !important',
                }}
              >
                <Typography variant="body2" color="text.secondary" fontStyle='italic'>
                  Assist co-founders in building the overall backend and frontend systems.
                </Typography>
              </CardContent>
            </Card>
            <Divider sx={{ padding: '8px 0' }} />
            <Card
              elevation={0}
            >
              <CardContent
                sx={{
                  padding: '8px 0px',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Develop frontend dashboard capabilities to visualize backend data.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Assist in managing backend AWS infrastructure and to integrate DevOps into system workflow.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Implement unit tests for backend system.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  padding: '0px',
                }}
              >
                <Chip size='small' label='React (TypeScript)' />
                <Chip size='small' label='Flutter (Android/iOS)' />
                <Chip size='small' label='Dart' />
                <Chip size='small' label='Python' />
                <Chip size='small' label='AWS' />
                <Chip size='small' label='DevOps' />
              </CardActions>
            </Card>
            <Divider sx={{ padding: '8px 0' }} />

            <Typography
              fontWeight='bold'
              sx={{
                paddingTop: '8px',
              }}
            >
              Personal Projects
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{
                fontStyle: 'italic',
              }}
            >
              Nov 2021 - Aug 2022
            </Typography>

            <Card
              elevation={0}
            >
              <CardContent
                sx={{
                  padding: '8px 0px',
                  paddingBottom: '0 !important',
                }}
              >
                <Typography variant="body2" color="text.secondary" fontStyle='italic'>
                  Took time off to recharge and re-evaluate future career direction.
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle='italic'>
                  At the same time, grabbed this opportunity to learn new technologies.
                </Typography>
              </CardContent>
            </Card>
            <Divider sx={{ padding: '8px 0' }} />
            <Card
              elevation={0}
            >
              <CardContent
                sx={{
                  padding: '8px 0px',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Implemented a Flutter mobile application to check bus arrival timings.<br />
                  https://play.google.com/store/apps/details?id=com.sgbusapp.sgbusapp_flutter
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  padding: '0px',
                }}
              >
                <Chip size='small' label='Flutter (Android)' />
                <Chip size='small' label='Dart' />
              </CardActions>
            </Card>
            <Divider sx={{ padding: '8px 0' }} />
            <Card
              elevation={0}
              sx={{
                paddingTop: '8px',
              }}
            >
              <CardContent
                sx={{
                  padding: '8px 0px',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Developed a full stack system to calculate and display one's lifetime luck using Chinese Metaphysic laws.<br />
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  padding: '0px',
                }}
              >
                <Chip size='small' label='Python' />
                <Chip size='small' label='React (TypeScript)' />
                <Chip size='small' label='Flutter (Android)' />
                <Chip size='small' label='Dart' />
              </CardActions>
            </Card>
            <Divider sx={{ padding: '8px 0' }} />
            <Typography
              fontWeight='bold'
              sx={{
                paddingTop: '8px',
              }}
            >
              DSO National Laboratories
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{
                fontStyle: 'italic',
              }}
            >
              Apr 2014 - Nov 2021
            </Typography>

            <Card
              elevation={0}
            >
              <CardContent
                sx={{
                  padding: '8px 0px',
                  paddingBottom: '0 !important',
                }}
              >
                <Typography variant="body2" color="text.secondary" fontStyle='italic'>
                  Worked under the Software Lab in Sensors Divisions.
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle='italic'>
                  Main job scope was to execute the entire software engineering lifecycle including
                  requirements gathering, designing, development, testing and deployment.
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle='italic'>
                  Worked as the sole software lead for most projects while collaborating with algorithm engineers
                  to port, optimize and integrate their algorithms into systems for deployment.
                </Typography>
              </CardContent>
            </Card>
            <Divider sx={{ padding: '8px 0' }} />
            <Card
              elevation={0}
            >
              <CardContent
                sx={{
                  padding: '8px 0px',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Developed a backend system to run and distribute algorithm jobs across independent worker processes.
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  Job coordination and synchronization among workers are achieved using a Java backend application with
                  MongoDB as database to store stateful information.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Collaborated with algorithm engineers to integrate Python algorithms for interfacing within the system.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The applications are packaged into Docker containers for future deployment into Kubernetes cluster.
                </Typography> */}
              </CardContent>
              <CardActions
                sx={{
                  padding: '0px',
                }}
              >
                <Chip size='small' label='Java' />
                <Chip size='small' label='Python' />
                <Chip size='small' label='MongoDB' />
                <Chip size='small' label='Docker' />
              </CardActions>
            </Card>
            <Divider sx={{ padding: '8px 0' }} />
            <Card
              elevation={0}
            >
              <CardContent
                sx={{
                  padding: '8px 0px',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Implemented a full stack system that integrates with embedded hardware units to display information.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Created an Android mobile application to perform Bluetooth communications with the embedded hardware units.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  padding: '0px',
                }}
              >
                <Chip size='small' label='Java' />
                <Chip size='small' label='React (TypeScript)' />
                <Chip size='small' label='Android (Java)' />
                <Chip size='small' label='MongoDB' />
              </CardActions>
            </Card>
            <Divider sx={{ padding: '8px 0' }} />
            <Card
              elevation={0}
            >
              <CardContent
                sx={{
                  padding: '8px 0px',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Implemented a full stack system that ingests images and run image processing algorithms.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  padding: '0px',
                }}
              >
                <Chip size='small' label='NodeJS (JavaScript)' />
                <Chip size='small' label='React (JavaScript)' />
                <Chip size='small' label='Python' />
                <Chip size='small' label='MongoDB' />
                <Chip size='small' label='Docker' />
              </CardActions>
            </Card>
            <Divider sx={{ padding: '8px 0' }} />
            <Card
              elevation={0}
            >
              <CardContent
                sx={{
                  padding: '8px 0px',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Piloted a Kubernetes GPU cluster with 4x CentOS7 nodes, each node having 8 NVIDIA GPUs each.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Assisted algorithm engineers in deploying machine learning algorithms on the cluster.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  padding: '0px',
                }}
              >
                <Chip size='small' label='Kubernetes' />
                <Chip size='small' label='Docker' />
              </CardActions>
            </Card>
            <Divider sx={{ padding: '8px 0' }} />
            <Card
              elevation={0}
            >
              <CardContent
                sx={{
                  padding: '8px 0px',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Developed a full stack system that runs 24/7 continuously in an Intel NUC form factor.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  padding: '0px',
                }}
              >
                <Chip size='small' label='C/C++' />
                <Chip size='small' label='Qt' />
                <Chip size='small' label='OpenCV' />
                <Chip size='small' label='CMake' />
              </CardActions>
            </Card>
            <Divider sx={{ padding: '8px 0' }} />
          </Box>
          <Box
            sx={{
              width: 'calc(100% / 3)',
              padding: '0 8px',
            }}
          >
            <Typography
              variant='h5'
              fontWeight='bold'
              sx={{
                paddingBottom: '8px',
              }}
            >
              Languages
            </Typography>
            {buildSkill('TypeScript', 100)}
            {buildSkill('JavaScript', 100)}
            {buildSkill('Python', 85)}
            {buildSkill('C/C++', 80)}
            {buildSkill('Java', 75)}
            {buildSkill('Dart', 70)}
            <Typography
              variant='h5'
              fontWeight='bold'
              sx={{
                paddingTop: '16px',
                paddingBottom: '8px',
              }}
            >
              Frontends
            </Typography>
            {buildSkill('React', 100)}
            {buildSkill('Flutter (Android/iOS)', 80)}
            {buildSkill('Android (Java)', 70)}
            {buildSkill('Qt', 70)}
            <Typography
              variant='h5'
              fontWeight='bold'
              sx={{
                paddingTop: '16px',
                paddingBottom: '8px',
              }}
            >
              Databases
            </Typography>
            {buildSkill('MongoDB', 90)}
            {buildSkill('MySQL', 80)}
            <Typography
              variant='h5'
              fontWeight='bold'
              sx={{
                paddingTop: '16px',
                paddingBottom: '8px',
              }}
            >
              Supporting Tools
            </Typography>
            {buildSkill('Git', 100)}
            {buildSkill('Docker', 95)}
            {buildSkill('CMake', 80)}
            {buildSkill('ZeroMQ', 75)}
            {buildSkill('OpenCV', 75)}
            {buildSkill('Kubernetes', 70)}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
