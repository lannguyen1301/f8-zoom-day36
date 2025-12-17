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
            <Div class="content-main">
            <Div class="card-grid">
              <Article class="card">
                <Div class="card-header">
                  <Div>
                    <span><img src="https://assets.codepen.io/285131/zeplin.svg"></span>
                    <h3>Zeplin</h3>
                  </Div>
                  <label class="toggle">
                    <input type="checkbox" checked="">
                    <span></span>
                  </label>
                </Div>
                <Div class="card-body">
                  <Para>Collaboration between designers and developers.</Para>
                </Div>
                <Div class="card-footer">
                  <Link href="#">View integration</Link>
                </Div>
              </Article>
              <Article class="card">
                <Div class="card-header">
                  <Div>
                    <Span><Img src="https://assets.codepen.io/285131/github.svg"></Span>
                    <h3>GitHub</h3>
                  </Div>
                  <label class="toggle">
                    <input type="checkbox" checked="">
                    <span></span>
                  </label>
                </Div>
                <Div class="card-body">
                  <p>Link pull requests and automate workflows.</p>
                </Div>
                <Div class="card-footer">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="card-header">
                  <Div>
                    <span><img src="https://assets.codepen.io/285131/figma.svg"></span>
                    <h3>Figma</h3>
                  </Div>
                  <label class="toggle">
                    <input type="checkbox" checked="">
                    <span></span>
                  </label>
                </Div>
                <Div class="card-body">
                  <p>Embed file previews in projects.</p>
                </Div>
                <Div class="card-footer">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="card-header">
                  <Div>
                    <span><img src="https://assets.codepen.io/285131/zapier.svg"></span>
                    <h3>Zapier</h3>
                  </Div>
                  <label class="toggle">
                    <input type="checkbox">
                    <span></span>
                  </label>
                </Div>
                <Div class="card-body">
                  <p>Build custom automations and integrations with apps.</p>
                </Div>
                <Div class="card-footer">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="card-header">
                  <Div>
                    <span><img src="https://assets.codepen.io/285131/notion.svg"></span>
                    <h3>Notion</h3>
                  </Div>
                  <label class="toggle">
                    <input type="checkbox" checked="">
                    <span></span>
                  </label>
                </Div>
                <Div class="card-body">
                  <p>Embed notion pages and notes in projects.</p>
                </Div>
                <Div class="card-footer">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="card-header">
                  <Div>
                    <span><img src="https://assets.codepen.io/285131/slack.svg"></span>
                    <h3>Slack</h3>
                  </Div>
                  <label class="toggle">
                    <input type="checkbox" checked="">
                    <span></span>
                  </label>
                </Div>
                <Div class="card-body">
                  <p>Send notifications to channels and create projects.</p>
                </Div>
                <Div class="card-footer">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="card-header">
                  <Div>
                    <span><img src="https://assets.codepen.io/285131/zendesk.svg"></span>
                    <h3>Zendesk</h3>
                  </Div>
                  <label class="toggle">
                    <input type="checkbox" checked="">
                    <span></span>
                  </label>
                </Div>
                <Div class="card-body">
                  <p>Link and automate Zendesk tickets.</p>
                </Div>
                <Div class="card-footer">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="card-header">
                  <Div>
                    <span><img src="https://assets.codepen.io/285131/jira.svg"></span>
                    <h3>Atlassian JIRA</h3>
                  </Div>
                  <label class="toggle">
                    <input type="checkbox">
                    <span></span>
                  </label>
                </Div>
                <Div class="card-body">
                  <p>Plan, track, and release great software.</p>
                </Div>
                <Div class="card-footer">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="card-header">
                  <Div>
                    <span><img src="https://assets.codepen.io/285131/dropbox.svg"></span>
                    <h3>Dropbox</h3>
                  </Div>
                  <label class="toggle">
                    <input type="checkbox" checked="">
                    <span></span>
                  </label>
                </Div>
                <Div class="card-body">
                  <p>Everything you need for work, all in one place.</p>
                </Div>
                <Div class="card-footer">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="card-header">
                  <Div>
                    <span><img src="https://assets.codepen.io/285131/google-chrome.svg"></span>
                    <h3>Google Chrome</h3>
                  </Div>
                  <label class="toggle">
                    <input type="checkbox" checked="">
                    <span></span>
                  </label>
                </Div>
                <Div class="card-body">
                  <p>
                    Link your Google account to share bookmarks across your
                    entire team.
                  </p>
                </Div>
                <Div class="card-footer">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="card-header">
                  <Div>
                    <span><img src="https://assets.codepen.io/285131/discord.svg"></span>
                    <h3>Discord</h3>
                  </Div>
                  <label class="toggle">
                    <input type="checkbox" checked="">
                    <span></span>
                  </label>
                </Div>
                <Div class="card-body">
                  <p>
                    Keep in touch with your customers without leaving the app.
                  </p>
                </Div>
                <Div class="card-footer">
                  <a href="#">View integration</a>
                </Div>
              </Article>
              <Article class="card">
                <Div class="card-header">
                  <Div>
                    <span><img src="https://assets.codepen.io/285131/google-drive.svg"></span>
                    <h3>Google Drive</h3>
                  </Div>
                  <label class="toggle">
                    <input type="checkbox">
                    <span></span>
                  </label>
                </Div>
                <Div class="card-body">
                  <p>
                    Link your Google account to share files across your entire
                    team.
                  </p>
                </Div>
                <Div class="card-footer">
                  <a href="#">View integration</a>
                </Div>
              </Article>
            </Div>
          </Div>
        </>
    );
}
export default Settings;
