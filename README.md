# business-card-hfbp

## what and why

Very lightweight (almost vanilla, we just use Bootstrap and SCSS) ReactJS business card template.

Image:

![https://github.com/HenryFBP/react-business-card-hfbp/raw/master/img.png](https://github.com/HenryFBP/react-business-card-hfbp/raw/master/img.png)

## upload to npmjs.com

    npm test
    npm run build
    npm publish

## how to use

    npm i business-card-hfbp

Then you can look into `index.tsx` for a sample (run `npm start` to see it for realsies), or just use below code.

```tsx
<BusinessCard
    name={'Henry Post'}
    cell={'xxx-xxx-xxxx'}
    skills={[
        'Python',
        'Java',
        'Kubernetes',
        'Helm',
        'Linux',
        'SQL',
        // 'Documentation',
        // 'Backend APIs'
    ]}
    frontBlurb={
        <img // TODO: you lazy BASTARD!!! GET A PROFESSIONAL HEADSHOT! >:3c
            src={'https://pbs.twimg.com/profile_images/1560595569730617344/yuAzEGGl_400x400.jpg'}
            style={{
                width: '7.5em',
                height: '7.5em',
            }}
            alt={"A picture of Henry smiling"}/>
        // null
    }
    backBlurb={
        <Container>
            <p>
                I have an intense drive to explain, document, and teach programming and technology concepts.
                When creating code, I strive to create reusable, clean, and well-documented code.
                I have a wide and deep history of programming projects, all under version control and most
                on my
                GitHub: <br/><br/>

                <p style={{textAlign: "center"}}>https://github.com/HenryFBP/</p>
            </p>
            <p>
                In short, I love to program, teach, and document my work; and I would say that I’m very good
                at
                it.
            </p>
        </Container>
    }
    headlines={[
        'Cybersec',
        'Automation Engineer',
        // 'Fullstack Java',
        'Helm & K8s',
        'L2 Support & DevSecOps'
    ]}
    email={'resplendent [dot] falconeer [at] gmail [dot] com'}
    location={'Chicago | Martha\'s Vineyard'}
    website={'henrypost.net'}
/>
```

## i dont like the design/etc

change it! you got da sauce code :3c

fork and PR or just fork and rename it/copy the source code

<3

### no, the font looks different!!

You need to include Bootstrap `<style>` tag or import it.

ex:

```tsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

## Run

    npm start

## test

    npm test

## Usage