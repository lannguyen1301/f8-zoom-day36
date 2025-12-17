import clsx from "clsx";
import { Link } from "react-router";
import styles from "./Settings.module.scss";
import Div from "@ui/Div";
import Span from "@ui/Span";
import Title from "@ui/Title";
import SubTitle from "@ui/SubTitle";
import Img from "@ui/Img";
import Button from "@ui/Button";
import Section from "@ui/Section";
import Nav from "@ui/Nav";
import Label from "@ui/Label";
import Article from "@ui/Article";
import Input from "@ui/Input";
import Para from "@ui/Para";
import Header from "@ui/Header";
import Footer from "@ui/Footer";
import SubsectionTitle from "@ui/SubsectionTitle";
function Settings() {
    return (
        <>
            <Div class="contentMain">
            <Div class="cardGrid">
              <Article class="card">
                <Div class="cardHeader">
                  <Div>
                    <Span>
                    <Img src="https://assets.codepen.io/285131/zeplin.svg" />

                    </Span>
                    <SubsectionTitle>Zeplin</SubsectionTitle>
                  </Div>
                  <Label class="toggle">
                    <Input type="checkbox" checked="" / />
                    <Span></Span>
                  </Label>
                </Div>
                <Div class="cardBody">
                  <Para>Collaboration between designers and developers.</Para>
                </Div>
                <Div class="cardFooter">
                  <Link href="#">View integration</Link>
                </Div>
              </Article>
              <Article class="card">
                <Div class="cardHeader">
                  <Div>
                    <Span>
                    <Img src="https://assets.codepen.io/285131/github.svg" />

                    </Span>
                    <SubsectionTitle>GitHub</SubsectionTitle>
                  </Div>
                  <Label class="toggle">
                    <Input type="checkbox" checked="" / />
                    <Span></Span>
                  </Label>
                </Div>
                <Div class="card-body">
                  <Para>Link pull requests and automate workflows.</Para>
                </Div>
                <Div class="cardFooter">
                  <Link href="#">View integration</Link>
                </Div>
              </Article>
              <Article class="card">
                <Div class="cardHeader">
                  <Div>
                    <Span>
                    <Img src="https://assets.codepen.io/285131/figma.svg" />
                    </Span>
                    <SubsectionTitle>Figma</SubsectionTitle>
                  </Div>
                  <Label class="toggle">
                    <Input type="checkbox" checked="" / />
                    <Span></Span>
                  </Label>
                </Div>
                <Div class="card-body">
                  <Para>Embed file previews in projects.</Para>
                </Div>
                <Div class="cardFooter">
                  <Link href="#">View integration</Link>
                </Div>
              </Article>
              <Article class="card">
                <Div class="cardHeader">
                  <Div>
                    <Span>
                    <Img src="https://assets.codepen.io/285131/zapier.svg" />
                    </Span>
                    <SubsectionTitle>Zapier</SubsectionTitle>
                  </Div>
                  <Label class="toggle">
                    <Input type="checkbox" />
                    <Span></Span>
                  </Label>
                </Div>
                <Div class="card-body">
                  <p>Build custom automations and integrations with apps.</p>
                </Div>
                <Div class="cardFooter">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="cardHeader">
                  <Div>
                    <Span><Img src="https://assets.codepen.io/285131/notion.svg" />
                    </Span>
                    <SubsectionTitle>Notion</SubsectionTitle>
                  </Div>
                  <Label class="toggle">
                    <Input type="checkbox" checked="" />
                    <Span></Span>
                  </Label>
                </Div>
                <Div class="card-body">
                  <Para>Embed notion pages and notes in projects.</Para>
                </Div>
                <Div class="cardFooter">
                  <Link href="#">View integration</Link>
                </Div>
              </Article>
              <Article class="card">
                <Div class="cardHeader">
                  <Div>
                    <Span>
                    <Img src="https://assets.codepen.io/285131/slack.svg" />
                    </Span>
                    <SubsectionTitle>Slack</SubsectionTitle>
                  </Div>
                  <Label class="toggle">
                    <input type="checkbox" checked="" />
                    <Span></Span>
                  </Label>
                </Div>
                <Div class="card-body">
                  <p>Send notifications to channels and create projects.</p>
                </Div>
                <Div class="cardFooter">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="cardHeader">
                  <Div>
                    <Span><Img src="https://assets.codepen.io/285131/zendesk.svg"></Span>
                    <SubsectionTitle>Zendesk</SubsectionTitle>
                  </Div>
                  <Label class="toggle">
                    <input type="checkbox" checked="" />
                    <Span></Span>
                  </Label>
                </Div>
                <Div class="card-body">
                  <p>Link and automate Zendesk tickets.</p>
                </Div>
                <Div class="cardFooter">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="cardHeader">
                  <Div>
                    <Span><Img src="https://assets.codepen.io/285131/jira.svg"></Span>
                    <SubsectionTitle>Atlassian JIRA</SubsectionTitle>
                  </Div>
                  <Label class="toggle">
                    <input type="checkbox">
                    <Span></Span>
                  </Label>
                </Div>
                <Div class="card-body">
                  <p>Plan, track, and release great software.</p>
                </Div>
                <Div class="cardFooter">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="cardHeader">
                  <Div>
                    <Span><Img src="https://assets.codepen.io/285131/dropbox.svg"></Span>
                    <SubsectionTitle>Dropbox</SubsectionTitle>
                  </Div>
                  <Label class="toggle">
                    <input type="checkbox" checked="" />
                    <Span></Span>
                  </Label>
                </Div>
                <Div class="card-body">
                  <p>Everything you need for work, all in one place.</p>
                </Div>
                <Div class="cardFooter">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="cardHeader">
                  <Div>
                    <Span><Img src="https://assets.codepen.io/285131/google-chrome.svg"></Span>
                    <SubsectionTitle>Google Chrome</SubsectionTitle>
                  </Div>
                  <Label class="toggle">
                    <input type="checkbox" checked="" />
                    <Span></Span>
                  </Label>
                </Div>
                <Div class="card-body">
                  <p>
                    Link your Google account to share bookmarks across your
                    entire team.
                  </p>
                </Div>
                <Div class="cardFooter">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="cardHeader">
                  <Div>
                    <Span><Img src="https://assets.codepen.io/285131/discord.svg"></Span>
                    <SubsectionTitle>Discord</SubsectionTitle>
                  </Div>
                  <Label class="toggle">
                    <input type="checkbox" checked="" />
                    <Span></Span>
                  </Label>
                </Div>
                <Div class="card-body">
                  <p>
                    Keep in touch with your customers without leaving the app.
                  </p>
                </Div>
                <Div class="cardFooter">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="cardHeader">
                  <Div>
                    <Span><Img src="https://assets.codepen.io/285131/google-drive.svg"></Span>
                    <SubsectionTitle>Google Drive</SubsectionTitle>
                  </Div>
                  <Label class="toggle">
                    <input type="checkbox">
                    <Span></Span>
                  </Label>
                </Div>
                <Div class="card-body">
                  <p>
                    Link your Google account to share files across your entire
                    team.
                  </p>
                </Div>
                <Div class="cardFooter">
                  <a href="#">View integration</a>
                </Div>
              </Article>
            </Div>
          </Div>
        </>
    );
}
export default Settings;
