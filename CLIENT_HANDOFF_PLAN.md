# Client Repository & CMS Handoff Plan

## 🎯 Overview
This plan walks through transferring the Azul Integrity website from development to client ownership, including GitHub, Netlify, and CMS setup.

---

## Phase 1: Client GitHub Account Setup

### Step 1: Client Creates GitHub Account
**Client Action:**
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Choose username (recommend: `azulintegrity` or similar professional name)
4. Use business email address
5. Verify email and complete setup

**Username to note:** `_________________` *(fill this in)*

---

## Phase 2: Repository Transfer

### Step 2: Transfer Repository from Your Account
**Your Action:**
1. Go to [github.com/scarletlvuyyuru/azulintegrity](https://github.com/scarletlvuyyuru/azulintegrity)
2. Click **Settings** tab
3. Scroll to **Danger Zone** at bottom
4. Click **Transfer ownership**
5. Enter client's GitHub username: `________________`
6. Type repository name: `azulintegrity`
7. Click **I understand, transfer this repository**

### Step 3: Client Accepts Transfer
**Client Action:**
1. Check email for transfer notification
2. Click **Accept transfer** in email
3. Confirm acceptance on GitHub

### Step 4: Client Adds You as Collaborator
**Client Action:**
1. Go to their new repository: `github.com/CLIENT_USERNAME/azulintegrity`
2. Click **Settings** tab
3. Click **Manage access** (left sidebar)
4. Click **Add people**
5. Enter your username: `scarletlvuyyuru`
6. Set role: **Admin** (important!)
7. Send invitation

**Your Action:**
1. Check email for collaboration invite
2. Accept invitation

---

## Phase 3: Update Your Local Development

### Step 5: Update Your Local Repository
**Your Action:**
```bash
# Navigate to your project
cd C:\Users\scarl\OneDrive\Desktop\azulintegrity

# Update remote URL to client's repository
git remote set-url origin https://github.com/CLIENT_USERNAME/azulintegrity.git

# Verify the change
git remote -v

# Pull any changes
git pull origin master
```

### Step 6: Update CMS Configuration
**Your Action:** *(I'll help with this)*
1. Update `public/admin/config.yml`
2. Change repository reference to client's username
3. Commit and push changes

---

## Phase 4: Netlify Transfer & Setup

### Step 7: Transfer Netlify Site to Client
**Option A - Transfer Existing Site:**
1. Go to [netlify.com](https://app.netlify.com)
2. Select the `azulintegrity` site
3. **Site Settings** → **General** → **Change site owner**
4. Enter client's email address
5. Client accepts transfer via email

**Option B - Client Creates New Site:**
1. Client signs up at [netlify.com](https://app.netlify.com)
2. **Add new site** → **Import from Git**
3. Connect GitHub → Select their `azulintegrity` repository
4. Deploy settings:
   - **Branch**: `master`
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
5. Click **Deploy site**

### Step 8: Configure Custom Domain (if applicable)
**Client Action:**
1. **Site Settings** → **Domain management**
2. **Add custom domain**: `azulintegrityaccounting.com`
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic)

---

## Phase 5: CMS Authentication Setup

### Step 9: Client Creates GitHub OAuth App
**Client Action:**
1. Go to **GitHub Settings** → **Developer settings** → **OAuth Apps**
2. Click **New OAuth App**
3. Fill in details:
   - **Application name**: `Azul Integrity CMS`
   - **Homepage URL**: `https://their-site-name.netlify.app`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
4. Click **Register application**
5. **Copy Client ID** and **generate Client Secret**
6. **Save both values securely**

### Step 10: Configure Netlify OAuth
**Client Action:**
1. In Netlify dashboard → **Site Settings**
2. **Access control** → **OAuth providers**
3. Click **Install provider** → **GitHub**
4. Enter:
   - **Client ID**: (from Step 9)
   - **Client Secret**: (from Step 9)
5. Click **Install**

---

## Phase 6: Final CMS Configuration

### Step 11: Update CMS Config for Client's Repo
**Your Action:** *(I'll help with this)*
```yaml
backend:
  name: github
  repo: CLIENT_USERNAME/azulintegrity
  branch: master
```

### Step 12: Test CMS Access
**Client Action:**
1. Visit: `https://their-site-name.netlify.app/admin`
2. Click **Login with GitHub**
3. Authorize the application
4. Verify CMS dashboard loads correctly

---

## Phase 7: Final Testing & Handoff

### Step 13: Complete System Test
**Together:**
- [ ] Website loads correctly on live URL
- [ ] All images display properly
- [ ] CMS login works
- [ ] Test content editing and publishing
- [ ] Verify SEO keywords are working
- [ ] Test contact form functionality

### Step 14: Client Training
**Your Action:**
1. Walk through CMS interface
2. Show how to edit content
3. Explain SEO keyword system
4. Review documentation files:
   - `CLIENT_SEO_GUIDE.md`
   - `DEVELOPER_SEO_DOCUMENTATION.md`

---

## Phase 8: Ongoing Maintenance Setup

### Step 15: Establish Support Process
**Agreement:**
- Client owns repository and deployment
- You maintain **Admin** access for technical support
- Define support scope and communication method
- Set up monitoring/alerts if needed

---

## 📋 Pre-Transfer Checklist

**Before starting the transfer, ensure:**
- [ ] All code is committed and pushed
- [ ] Website builds successfully
- [ ] All images are working
- [ ] Documentation is complete
- [ ] Contact form is functional
- [ ] SEO system is working

---

## 🔗 Important URLs to Update

After transfer, these will change:
- **Repository**: `github.com/CLIENT_USERNAME/azulintegrity`
- **CMS Admin**: `https://client-site.netlify.app/admin`
- **Live Site**: `https://client-site.netlify.app` (or custom domain)

---

## 📞 Support Notes

**For future technical support:**
1. You'll work with the client's repository directly
2. GitHub Copilot can help with their repository just like yours
3. Clone their repo locally when needed: `git clone https://github.com/CLIENT_USERNAME/azulintegrity.git`

---

## ✅ Success Criteria

**Transfer is complete when:**
- [ ] Client owns GitHub repository
- [ ] Client owns Netlify deployment
- [ ] Client can log into CMS and edit content
- [ ] You have Admin access to their repository
- [ ] All functionality works in production
- [ ] Client is trained on basic CMS usage

---

*This handoff plan ensures professional ownership transfer while maintaining your ability to provide ongoing technical support.*